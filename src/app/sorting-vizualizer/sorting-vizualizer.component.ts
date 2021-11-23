import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting-vizualizer',
  templateUrl: './sorting-vizualizer.component.html',
  styleUrls: ['./sorting-vizualizer.component.css'],
})
export class SortingVizualizerComponent {
  options = {
    initialOrder: 'random',
    numberOfEntries: 100,
    sortType: 'bubble',
  };

  constructor() { }

  public onSubmit(): void {
    console.log('Form Submitted');
  }
}
