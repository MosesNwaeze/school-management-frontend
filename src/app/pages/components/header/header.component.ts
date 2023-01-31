import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() styles: string = '';

  ngOnInit(): void {
    const headerTop: any = document.querySelector(`.sticky-header`);
    headerTop.styles.background_color = this.styles.split(' ')[0];
    const header: any = document.querySelector(`.menu-bar`);
    header.styles.background_color = this.styles.split(' ')[1];
  }
}
