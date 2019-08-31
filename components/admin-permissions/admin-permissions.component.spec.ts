import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPermissionsComponent } from './admin-permissions.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../imports';

describe('AdminPermissionsComponent', () => {
  let component: AdminPermissionsComponent;
  let fixture: ComponentFixture<AdminPermissionsComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPermissionsComponent ],
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
    fixture = TestBed.createComponent(AdminPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
