import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminRequestService } from '../../services/admin-request.service';
import { CacheService } from '../../imports';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.sass']
})
export class AdminRolesComponent implements OnInit, OnDestroy {

  roles: any;

  edit_role: any;

  default_role: any = {
    id: null,
    name: null,
    slug: null,
    description: null
  };

  subs = new Subscription();

  permissions: Array<any> = [];

  has_permissions: Array<any> = [];

  not_has_permissions: Array<any> = [];

  get isPageReady() {
    return this.roles && this.permissions;
  }

  constructor(
    private adminRequestService: AdminRequestService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    const rq1 = this.adminRequestService.getRoles().subscribe( response => this.roles = response );
    const rq2 = this.adminRequestService.getPermissions().subscribe( response => this.permissions = response );

    this.subs.add(rq1);
    this.subs.add(rq2);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submitForm(f: NgForm) {
    const role = {
      id: f.value.id,
      name: this.edit_role.name,
      tooltip: this.edit_role.tooltip,
      url: f.value.url,
      weight: f.value.weight,
      parent: f.value.parent,
      roles: this.has_permissions
    };

    let rq1;

    if (role.id) {

      rq1 = this.adminRequestService.postRole(role, role.id).subscribe(response => this.refreshComponent());
    } else {

      rq1 = this.adminRequestService.putRole(role).subscribe(response => this.refreshComponent());
    }

    this.subs.add(rq1);
  }

  deleteRole(id: string) {
    const rq4 = this.adminRequestService.deleteRole(id).subscribe(response => this.refreshComponent());

    this.subs.add(rq4);
  }

  refreshComponent() {
    this.roles = null;

    this.permissions = null;

    this.edit_role = null;

    const rq1 = this.adminRequestService.getRoles().subscribe( response => this.roles = response );
    const rq2 = this.adminRequestService.getPermissions().subscribe( response => this.permissions = response );

    this.subs.add(rq1).add(rq2);
  }

  selectRole(role: any) {
    this.edit_role = role;
    // this.filterRoles(role.roles);
  }

  filterRoles(roles) {
    this.has_permissions = [];

    this.not_has_permissions = [];

    this.has_permissions = this.roles.filter(role => {

      role.changed = false;

      for (const one of roles) {

        if (one.id === role.id) {

          return true;
        }
      }

      this.not_has_permissions.push(role);

      return false;
    });

    this.sortPermissions();
  }

  addPermission(id: number) {
    this.changePermission(id, this.has_permissions, this.not_has_permissions);
  }

  discardPermission(id: number) {
    this.changePermission(id, this.not_has_permissions, this.has_permissions);
  }

  changePermission(id: number, add: any, sub: any) {
    const index = sub.findIndex(Permission => Permission.id === id);

    sub[index].changed = !sub[index].changed;

    add.push(sub[index]);

    sub.splice(index, 1);

    this.sortPermissions();
  }

  sortPermissions() {
    this.has_permissions.sort((a, b) => a.id - b.id);

    this.not_has_permissions.sort((a, b) => a.id - b.id);
  }
}
