import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminRequestService } from '../../services/admin-request.service';
import { CacheService } from '../../imports';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-permissions',
  templateUrl: './admin-permissions.component.html',
  styleUrls: ['./admin-permissions.component.sass']
})
export class AdminPermissionsComponent implements OnInit, OnDestroy {

  permissions: any;

  edit_permission: any;

  subs = new Subscription();

  default_permission: any = {
    id: null,
    name: null,
    slug: null,
    description: null
  };

  get isPageReady() {
    return !!this.permissions;
  }

  constructor(
    private adminRequestService: AdminRequestService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    const rq1 = this.adminRequestService.getPermissions().subscribe(response => this.permissions = response);

    this.subs.add(rq1);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submitForm(f: NgForm) {
    const permission = {
      id: f.value.id,
      name: f.value.name,
      slug: f.value.slug,
      description: f.value.description
    };

    let rq1;

    if (permission.id) {

      rq1 = this.adminRequestService.putPermission(permission.id, permission).subscribe(response => this.refreshComponent());
    } else {

      rq1 = this.adminRequestService.postPermission(permission).subscribe(response => this.refreshComponent());
    }

    this.subs.add(rq1);
  }

  deletePermission(id: string) {
    const rq4 = this.adminRequestService.deletePermission(id).subscribe(response => this.refreshComponent());

    this.subs.add(rq4);
  }

  refreshComponent() {
    this.permissions = null;

    this.edit_permission = null;

    this.cacheService.delete('permissions');

    const rq1 = this.adminRequestService.getPermissions().subscribe(response => this.permissions = response);

    this.subs.add(rq1);
  }

  selectPermission(permission: any) {
    this.edit_permission = permission;
  }
}
