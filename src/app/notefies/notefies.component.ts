import { Component } from '@angular/core';

@Component({
  selector: 'app-notefies',
  templateUrl: './notefies.component.html',
  styleUrls: ['./notefies.component.css']
})
export class NotefiesComponent {
  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3,
        autoplay: false,
        dots: false,
        loop: false,

      }
    }
  }
}
