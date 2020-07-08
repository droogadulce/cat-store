import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-store';

  items = ['🍙', '🍗', '🥩', '🍖'];

  addItem(): void {
    this.items.push('🌯');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
