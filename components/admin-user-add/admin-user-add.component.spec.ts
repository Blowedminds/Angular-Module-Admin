import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddComponent } from './admin-user-add.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../imports';

describe('AdminUserAddComponent', () => {
  let component: AdminUserAddComponent;
  let fixture: ComponentFixture<AdminUserAddComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserAddComponent ],
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
    fixture = TestBed.createComponent(AdminUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
