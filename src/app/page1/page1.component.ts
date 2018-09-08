import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public title: string = 'テストだよ';
  public btnTitle: string = 'ここをクリックして';

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    if (this.title === 'テストだよ') {
      this.title = 'クリックされたよ';
      this.btnTitle = '元に戻すよ';
    } else {
      this.title = 'テストだよ';
      this.btnTitle = 'ここをクリックして';
    }
  }
}
