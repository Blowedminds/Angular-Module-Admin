import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserEditComponent } from './admin-user-edit.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../imports';

describe('AdminUserEditComponent', () => {
  let component: AdminUserEditComponent;
  let fixture: ComponentFixture<AdminUserEditComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserEditComponent ],
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
    fixture = TestBed.createComponent(AdminUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
