
import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  //template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = '';
  url = '';
  listItems: any[];

  constructor() {
    this.listItems = [
      {
        name: "home",
        link: "#/home"
      },
      {
        name: "products",
        link: "#/products"
      },
      {
        name: "cart",
        link: "#/cart"
      },
      {
        name: "about",
        link: "#/about"
      }
    ];
  }

  add(title: string, url: string) {
    if (title !== "" && url !== "") {
      url = "http://" + url;
      this.listItems.push({
        name: title,
        link: url,
        isNew: true
      });
      this.title = "";
      this.url = "";
    }
  }
}