import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminMenusComponent } from './components/admin-menus/admin-menus.component';

import { AdminRequestService } from './services/admin-request.service';
import { AdminService } from './services/admin.service';
import { AdminLanguagesComponent } from './components/admin-languages/admin-languages.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserAddComponent } from './components/admin-user-add/admin-user-add.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminRolesComponent } from './components/admin-roles/admin-roles.component';
import { AdminPermissionsComponent } from './components/admin-permissions/admin-permissions.component';
import { NavigationModule } from '../navigation/navigation.module';
import { RecursiveMenuComponent } from './components/admin-menus/recursive-menu/recursive-menu.component';
import { SiteOptionsComponent } from './components/site-options/site-options/site-options.component';

@NgModule({
  declarations: [
    AdminCategoriesComponent,
    AdminMenusComponent,
    AdminLanguagesComponent,
    AdminUsersComponent,
    AdminUserAddComponent,
    AdminUserEditComponent,
    AdminRolesComponent,
    AdminPermissionsComponent,
    RecursiveMenuComponent,
    SiteOptionsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavigationModule
  ],
  providers: [
    AdminRequestService,
    AdminService
  ]
})
export class AdminModule { }
