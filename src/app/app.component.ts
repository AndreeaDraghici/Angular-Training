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
  //array of WishItems objects
  items : WishItem[]=[
    new WishItem('Learn Angular'),
    new WishItem('Andreea wants coffee', true),
    new WishItem('Find grass thhat cuts istself')
  ]

  title = 'wishlist';
/**
 * Toggles the completion status of a given wish item.
 *
 * This method takes a `WishItem` object and reverses its `isComplete` property.
 * If `isComplete` is `true`, it sets it to `false`, and vice versa. 
 * After toggling, it logs the updated item to the console.
 *
 * @param {WishItem} item - The wish item whose completion status is to be toggled.
 */
toggleItem(item: WishItem): void {
  item.isComplete = !item.isComplete;
  console.log(item);
}
}
