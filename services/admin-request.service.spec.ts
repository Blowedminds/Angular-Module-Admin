import { TestBed, inject, async } from '@angular/core/testing';

import { AdminRequestService } from './admin-request.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingHelper } from '../imports';
import { catchError } from 'rxjs/operators';
import { CoreModule } from '../imports';

describe('AdminRequestService', () => {

  let requestService: AdminRequestService;

  const testingHelper = new TestingHelper();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRequestService],
      imports: [
        CoreModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(testingHelper.routes)
      ]
    });

    requestService = TestBed.get(AdminRequestService);
  });

  it('should be created', inject([AdminRequestService], (service: AdminRequestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have correct route for getMenus', async(() => {
    requestService.getMenus()
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for postMenu', async(() => {
    requestService.postMenu({})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for putMenu', async(() => {
    requestService.putMenu(0, {})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for deleteMenu', async(() => {
    requestService.deleteMenu(0)
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for getCategories', async(() => {
    requestService.getCategories()
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for postCategory', async(() => {
    requestService.postCategory({})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for putCategory', async(() => {
    requestService.putCategory(0, {})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for deleteCategory', async(() => {
    requestService.deleteCategory(0)
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for getLanguages', async(() => {
    requestService.getLanguages()
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for postLanguage', async(() => {
    requestService.postLanguage({})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for putLanguage', async(() => {
    requestService.putLanguage(0, {})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for deleteLanguage', async(() => {
    requestService.deleteLanguage(0)
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for getOptions', async(() => {
    requestService.getOptions()
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for postOption', async(() => {
    requestService.postOption({})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for putOption', async(() => {
    requestService.putOption('option', {})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for deleteOption', async(() => {
    requestService.deleteOption('option')
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for getPermissions', async(() => {
    requestService.getPermissions()
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for postPermission', async(() => {
    requestService.postPermission({})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for putPermission', async(() => {
    requestService.putPermission(0, {})
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

  it('should have correct route for deletePermission', async(() => {
    requestService.deletePermission(0)
      .pipe(catchError(error => testingHelper.unAuthenticatedError(error)))
      .subscribe(response => response, error => error);
  }));

});
