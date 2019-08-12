import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminRequestService } from '../../services/admin-request.service';
import { AdminService } from '../../services/admin.service';
import { CacheService } from '../../imports';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-roles',
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
    description: null,
    permissions: []
  };

  subs = new Subscription();

  permissions: Array<any> = [];

  get isPageReady() {
    return this.roles && this.permissions;
  }

  constructor(
    private adminRequestService: AdminRequestService,
    private adminService: AdminService,
    private cacheService: CacheService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    const rq1 = this.adminRequestService.getRoles().subscribe(response => this.roles = response);
    const rq2 = this.adminRequestService.getPermissions().subscribe(response => this.permissions = response);

    this.subs.add(rq1);
    this.subs.add(rq2);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submitForm(f: NgForm) {
    const permissions = this.permissions.filter(permission => permission.exist).map(permission => permission.id);

    const role = {
      id: f.value.id,
      name: f.value.name,
      slug: f.value.slug,
      description: f.value.description,
      permissions: permissions
    };

    let rq1: any;

    if (role.id) {

      rq1 = this.adminRequestService.putRole(role.id, role).subscribe(response => this.refreshComponent('Rol güncellendi', 'Tamam', true));
    } else {

      rq1 = this.adminRequestService.postRole(role).subscribe(response => this.refreshComponent('Rol eklendi', 'Tamam', true));
    }

    this.subs.add(rq1);
  }

  deleteRole(id: string) {
    const rq4 = this.adminRequestService.deleteRole(id).subscribe(response => this.refreshComponent('Rol silindi', 'Tamam', true));

    this.subs.add(rq4);
  }

  refreshComponent(message: string, action: string, state: boolean) {

    this.adminService.openSnack(this.snackBar, message, action, state);

    this.roles = null;

    this.permissions = null;

    this.edit_role = null;

    this.cacheService.delete('roles');

    const rq1 = this.adminRequestService.getRoles().subscribe(roles => this.roles = roles);
    const rq2 = this.adminRequestService.getPermissions().subscribe(permissions => this.permissions = permissions);

    this.subs.add(rq1);
    this.subs.add(rq2);
  }

  selectRole(role: any) {
    this.edit_role = role;

    for (const permission of this.permissions) {
      const index = this.edit_role.permissions.findIndex(_permission => _permission.id === permission.id);
      console.log(index);
      permission.exist = index !== -1;
    }
    // this.filterRoles(role.roles);
  }
}
