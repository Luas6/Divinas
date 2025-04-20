import { Component } from '@angular/core';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.component.html',
  styleUrls: ['./escapadas.component.css']
})
export class EscapadasComponent {
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
        items: 3
      }
    }
  }
  
}
