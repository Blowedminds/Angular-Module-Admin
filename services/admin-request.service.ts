import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HelpersService, MainRequestService, RoutingListService } from '../imports';

@Injectable()
export class AdminRequestService extends MainRequestService {

  constructor(
    http: HttpClient,
    helpersService: HelpersService,
    routingListService: RoutingListService
  ) {
    super(http, helpersService, routingListService);
  }

  getUsers(): Observable<any> {
    return this.makeGetRequest('core.user.users');
  }

  getUser(user_id: string): Observable<any> {
    return this.makeGetRequest('core.user.user', user_id);
  }

  postUser(data: any, id: number): Observable<any> {
    return this.makePostRequest('core.user.user', data, `${id}`);
  }

  putUser(data: any): Observable<any> {
    return this.makePutRequest('auth.register', data);
  }

  deleteUser(user_id: string): Observable<any> {
    return this.makeDeleteRequest('core.user.user', user_id);
  }

  getRoles(): Observable<any> {
    return this.makeGetRequest('core.role.roles');
  }

  putRole(data: any, id: number): Observable<any> {
    return this.makePutRequest('core.role.role', data, `${id}`);
  }

  postRole(data: any): Observable<any> {
    return this.makePostRequest('core.role.role', data);
  }

  deleteRole(role_id: string): Observable<any> {
    return this.makeDeleteRequest('core.role.role', role_id);
  }

  getPermissions(): Observable<any> {
    return this.makeGetRequest('core.permission.permissions');
  }

  getPermission(permission_id: string): Observable<any> {
    return this.makeGetRequest('core.permission.permission', permission_id);
  }

  putPermission(data: any, id: number): Observable<any> {
    return this.makePutRequest('core.permission.permission', data, `${id}`);
  }

  postPermission(data: any): Observable<any> {
    return this.makePostRequest('core.permission.permission', data);
  }

  deletePermission(permission_id: string): Observable<any> {
    return this.makeDeleteRequest('core.permission.permission', permission_id);
  }

  getMenus(): Observable<any> {
    return this.makeGetRequest('core.menu.menus');
  }

  postMenu(data: any): Observable<any> {
    return this.makePostRequest('core.menu.menu', data);
  }

  putMenu(data: any): Observable<any> {
    return this.makePutRequest('core.menu.menu', data);
  }

  deleteMenu(id: number): Observable<any> {
    return this.makeDeleteRequest('core.menu.menu', `${id}`);
  }

  getLanguages(): Observable<any> {
    return this.makeGetRequest('core.language.languages');
  }

  postLanguage(data: any): Observable<any> {
    return this.makePostRequest('core.language.languages', data);
  }

  putLanguage(data: any): Observable<any> {
    return this.makePutRequest('core.language.languages', data);
  }

  deleteLanguage(id: number): Observable<any> {
    return this.makeDeleteRequest('core.language.languages', `${id}`);
  }

  getCategories(): Observable<any> {
    return this.makeGetRequest('core.category.categories');
  }

  postCategory(data: any, id: number): Observable<any> {
    return this.makePostRequest('core.category.categories', data, `${id}`);
  }

  putCategory(data: any): Observable<any> {
    return this.makePutRequest('core.category.categories', data);
  }

  deleteCategory(id: number): Observable<any> {
    return this.makeDeleteRequest('core.category.categories', `${id}`);
  }

  getOptions(): Observable<any> {
    return this.makeGetRequest('core.option.options');
  }

  getOption(key: string): Observable<any> {
    return this.makeGetRequest('core.option.option', key);
  }

  postOption(data: any): Observable<any> {
    return this.makePostRequest('core.option.option', data);
  }

  putOption(key: string, data: any): Observable<any> {
    return this.makePutRequest('core.option.option', data, key);
  }

  deleteOption(key: string): Observable<any> {
    return this.makeDeleteRequest('core.option.option', key);
  }
}
