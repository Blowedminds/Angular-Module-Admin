import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../../imports';
import { AdminRequestService } from 'src/app/admin/services/admin-request.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-site-options',
  templateUrl: './site-options.component.html',
  styleUrls: ['./site-options.component.scss']
})
export class SiteOptionsComponent extends MainComponent {

  options: any;

  addOption = false;

  types: Array<any> = [
    { name: 'Yazı', type: 'string' },
    { name: 'Sayı', type: 'number' },
    { name: 'Onay', type: 'boolean' }
  ];

  get isPageReady(): boolean {
    return !!this.options;
  }

  constructor(
    private requestService: AdminRequestService,
    private service: AdminService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit() {
    this.subs.add(
      this.requestService.getOptions().subscribe(response => {
        this.options = response.map(option => {
          const index = this.types.findIndex(type => type.type === option.type);

          option.type = index !== -1 ? this.types[index] : 'undefined';

          return option;
        });
      })
    );
  }

  postOption(f: NgForm) {
    this.subs.add(
      this.requestService.postOption({
        key: f.value.key,
        type: f.value.type,
        value: f.value.value
      }).subscribe(response => {
        this.service.openSnack(this.snackBar, 'Seçenek eklendi', 'Tamam', true);

        this.options.push({
          key: f.value.key,
          type: this.types.find(type => type.type === f.value.type),
          value: f.value.value
        });

        this.addOption = false;
      })
    );
  }

  putOption(option: any) {
    let value: any;

    switch (option.type.type) {
      case 'boolean':
        value = option.value === 'true' ? 'false' : 'true';
        option.value = value;
        break;
      case 'number':
      case 'string':
        value = option.value;
        break;
      default:
        return;
    }

    this.subs.add(
      this.requestService.putOption(option.key, {
        value: value
      }).subscribe(response => this.service.openSnack(this.snackBar, 'Seçenek güncellendi', 'Tamam', true))
    );
  }
}
