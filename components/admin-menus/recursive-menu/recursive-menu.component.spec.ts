import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveMenuComponent } from './recursive-menu.component';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper, NavigationModule } from '../../../imports';

describe('RecursiveMenuComponent', () => {
  let component: RecursiveMenuComponent;
  let fixture: ComponentFixture<RecursiveMenuComponent>;

  const testingHelper = new TestingHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveMenuComponent ],
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
    fixture = TestBed.createComponent(RecursiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
