import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminMenusComponent } from './components/admin-menus/admin-menus.component';

import { AdminRequestService } from './services/admin-request.service';
import { AdminService } from './services/admin.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminLanguagesComponent } from './components/admin-languages/admin-languages.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserAddComponent } from './components/admin-user-add/admin-user-add.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminRolesComponent } from './components/admin-roles/admin-roles.component';
import { AdminPermissionsComponent } from './components/admin-permissions/admin-permissions.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminCategoriesComponent,
    AdminMenusComponent,
    NavigationComponent,
    AdminLanguagesComponent,
    AdminUsersComponent,
    AdminUserAddComponent,
    AdminUserEditComponent,
    AdminRolesComponent,
    AdminPermissionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    AdminRequestService,
    AdminService
  ]
})
export class AdminModule { }
