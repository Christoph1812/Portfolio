import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
