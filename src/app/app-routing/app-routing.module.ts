import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KosuFormComponent } from '../kosu-form/kosu-form.component';

const routes: Routes = [
  { path: 'kosu', component: KosuFormComponent },
  { path: '', redirectTo: '/kosu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
