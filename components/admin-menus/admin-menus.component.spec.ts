import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenusComponent } from './admin-menus.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../imports';
import { RecursiveMenuComponent } from './recursive-menu/recursive-menu.component';

describe('AdminMenusComponent', () => {
  let component: AdminMenusComponent;
  let fixture: ComponentFixture<AdminMenusComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenusComponent, RecursiveMenuComponent ],
      providers: [
        AdminRequestService,
        AdminService
      ],
      imports: [
        NavigationModule,
        RouterTestingModule.withRoutes(testingHelper.routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
