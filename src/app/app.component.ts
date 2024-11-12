import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import model WishList
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //created an items array that contains multiple WishItem objects
  items =[
    new WishItem('Learn Angular'),
    new WishItem('Andreea wants coffee', true),
    new WishItem('Find grass thhat cuts istself')
  ]

  title = 'wishlist';
}
