import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AdminRequestService } from '../../services/admin-request.service';
import { CacheService, HelpersService } from '../../imports';

@Component({
  selector: 'app-admin-menus',
  templateUrl: './admin-menus.component.html',
  styleUrls: ['./admin-menus.component.sass']
})
export class AdminMenusComponent implements OnInit, OnDestroy {

  menus: any;

  edit_menu: any;

  subs = new Subscription();

  languages: any;

  locale: string;

  roles: Array<any> = [];

  listedMenus: Array<any> = [];

  has_roles: Array<any> = [];

  not_has_roles: Array<any> = [];

  default_menu: any = {
    id: null,
    name: {},
    tooltip: {},
    url: null,
    weight: null,
    parent: null,
    roles: []
  };

  get isPageReady() {
    return this.menus && this.languages && this.roles;
  }

  constructor(
    private adminRequestService: AdminRequestService,
    private helpersService: HelpersService,
    private cacheService: CacheService
  ) {
    this.locale = this.helpersService.getLocale();
  }

  ngOnInit() {
    this.subs.add(
      this.adminRequestService.getMenus().subscribe(response => {
        this.menus = response;

        if (this.roles) {
          this.listMenusByRole();
        }
      })
    );

    this.subs.add(
      this.cacheService.get('languages', this.adminRequestService.makeGetRequest('core.language.languages'))
        .subscribe(response => {
          this.languages = response;

          for (const language of this.languages) {
            this.default_menu.name[language.slug] = '';
            this.default_menu.tooltip[language.slug] = '';
          }
        })
    );

    this.subs.add(
      this.cacheService.get('roles', this.adminRequestService.makeGetRequest('core.role.roles'))
        .subscribe(response => {
          for (const role of response) {
            role.filter = true;
          }
          this.roles = response;

          if (this.menus) {
            this.listMenusByRole();
          }
        })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submitForm(f: NgForm) {
    const menu = {
      id: f.value.id,
      name: this.edit_menu.name,
      tooltip: this.edit_menu.tooltip,
      url: f.value.url,
      weight: f.value.weight,
      parent: f.value.parent,
      roles: this.has_roles.map( role => role.id)
    };

    let rq1: any;

    if (menu.id) {
      rq1 = this.adminRequestService.putMenu(menu.id, menu).subscribe(response => this.refreshComponent());
    } else {
      rq1 = this.adminRequestService.postMenu(menu).subscribe(response => this.refreshComponent());
    }

    this.subs.add(rq1);
  }

  deleteMenu(id: number) {
    this.subs.add(
      this.adminRequestService.deleteMenu(id).subscribe(response => this.refreshComponent())
    );
  }

  refreshComponent() {
    this.menus = null;

    this.edit_menu = null;

    this.cacheService.delete('menus');

    this.subs.add(
      this.adminRequestService.getMenus().subscribe(response => {
        this.menus = response;

        if (this.roles) {
          this.listMenusByRole();
        }
      })
    );
  }

  selectMenu(menu: any) {
    this.edit_menu = menu;

    this.filterRoles(menu.roles);
  }

  filterRoles(roles) {
    this.has_roles = [];

    this.not_has_roles = [];

    this.has_roles = this.roles.filter(role => {

      role.changed = false;

      for (const one of roles) {

        if (one.role_id === role.id) {

          return true;
        }
      }

      this.not_has_roles.push(role);

      return false;
    });

    this.sortRoles();
  }

  addRole(id: number) {
    this.changeRole(id, this.has_roles, this.not_has_roles);
  }

  discardRole(id: number) {
    this.changeRole(id, this.not_has_roles, this.has_roles);
  }

  changeRole(id: number, add: any, sub: any) {
    const index = sub.findIndex(role => role.id === id);

    sub[index].changed = !sub[index].changed;

    add.push(sub[index]);

    sub.splice(index, 1);

    this.sortRoles();
  }

  sortRoles() {
    this.has_roles.sort((a, b) => a.id - b.id);

    this.not_has_roles.sort((a, b) => a.id - b.id);
  }

  filterMenus(role: any) {
    role.filter = !(role.filter);

    this.listMenusByRole();
  }

  listMenusByRole() {
    this.listedMenus = [];

    for (const menu of this.menus) {
      for (const role of this.roles) {
        if (!role.filter) {
          continue;
        }

        if (this.hasRole(menu.roles, role.id)) {
          this.listedMenus.push(menu);
          break;
        }
      }
    }
  }

  hasRole(menuRoles: any, role_id: number): boolean {
    return menuRoles.findIndex(role => role.role_id === role_id) !== -1;
  }
}
