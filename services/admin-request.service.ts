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

  postUser(data: any): Observable<any> {
    return this.makePostRequest('core.user.user', data);
  }

  putUser(id: string, data: any): Observable<any> {
    return this.makePutRequest('core.user.user', data, id);
  }

  deleteUser(user_id: string): Observable<any> {
    return this.makeDeleteRequest('core.user.user', user_id);
  }

  getRoles(): Observable<any> {
    return this.makeGetRequest('core.role.roles');
  }

  postRole(data: any): Observable<any> {
    return this.makePostRequest('core.role.role', data);
  }

  putRole(id: number, data: any): Observable<any> {
    return this.makePutRequest('core.role.role', data, `${id}`);
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

  postPermission(data: any): Observable<any> {
    return this.makePostRequest('core.permission.permission', data);
  }

  putPermission(id: number, data: any): Observable<any> {
    return this.makePutRequest('core.permission.permission', data, `${id}`);
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

  putMenu(id: number, data: any): Observable<any> {
    return this.makePutRequest('core.menu.menu', data, `${id}`);
  }

  deleteMenu(id: number): Observable<any> {
    return this.makeDeleteRequest('core.menu.menu', `${id}`);
  }

  getLanguages(): Observable<any> {
    return this.makeGetRequest('core.language.languages');
  }

  postLanguage(data: any): Observable<any> {
    return this.makePostRequest('core.language.language', data);
  }

  putLanguage(id: number, data: any): Observable<any> {
    return this.makePutRequest('core.language.language', data, `${id}`);
  }

  deleteLanguage(id: number): Observable<any> {
    return this.makeDeleteRequest('core.language.language', `${id}`);
  }

  getCategories(): Observable<any> {
    return this.makeGetRequest('core.category.categories');
  }

  postCategory(data: any): Observable<any> {
    return this.makePostRequest('core.category.category', data);
  }

  putCategory(id: number, data: any): Observable<any> {
    return this.makePutRequest('core.category.category', data, `${id}`);
  }

  deleteCategory(id: number): Observable<any> {
    return this.makeDeleteRequest('core.category.category', `${id}`);
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
