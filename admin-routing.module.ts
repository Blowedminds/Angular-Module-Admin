import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminMenusComponent } from './components/admin-menus/admin-menus.component';
import { AdminLanguagesComponent } from './components/admin-languages/admin-languages.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserAddComponent } from './components/admin-user-add/admin-user-add.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminRolesComponent } from './components/admin-roles/admin-roles.component';
import { AdminPermissionsComponent } from './components/admin-permissions/admin-permissions.component';
import { NavigationComponent } from './imports';

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      { path: 'user', component: AdminUserAddComponent },
      { path: 'user/:user_id', component: AdminUserEditComponent },
      { path: 'admin', component: AdminPanelComponent },
      { path: 'admin/roles', component: AdminRolesComponent },
      { path: 'admin/permissions', component: AdminPermissionsComponent },
      { path: 'admin/menus', component: AdminMenusComponent },
      { path: 'admin/languages', component: AdminLanguagesComponent },
      { path: 'admin/categories', component: AdminCategoriesComponent },
      { path: 'admin/users', component: AdminUsersComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: false }
    )],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
