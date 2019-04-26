import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recursive-menu',
  templateUrl: './recursive-menu.component.html',
  styleUrls: ['./recursive-menu.component.scss']
})
export class RecursiveMenuComponent implements OnInit {

  @Input() locale;
  @Input() menus;

  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitSelect(menu: any) {
    this.select.emit(menu);
  }
}
