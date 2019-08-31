import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLanguagesComponent } from './admin-languages.component';
import { TestingHelper, NavigationModule } from '../../imports';
import { AdminRequestService } from '../../services/admin-request.service';
import { AdminService } from '../../services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminLanguagesComponent', () => {
  let component: AdminLanguagesComponent;
  let fixture: ComponentFixture<AdminLanguagesComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLanguagesComponent ],
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
    fixture = TestBed.createComponent(AdminLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
