import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOptionsComponent } from './site-options.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../../imports';

describe('SiteOptionsComponent', () => {
  let component: SiteOptionsComponent;
  let fixture: ComponentFixture<SiteOptionsComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteOptionsComponent ],
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
    fixture = TestBed.createComponent(SiteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
