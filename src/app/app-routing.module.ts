import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingVizualizerComponent } from './sorting-vizualizer/sorting-vizualizer.component';

const routes: Routes = [
  { path: 'sorting-vizualizer', component: SortingVizualizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
