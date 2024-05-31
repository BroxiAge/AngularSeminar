import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparesComponent } from './spares/spares.component';
import { SpareAboutComponent } from './spare-about/spare-about.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'spares',
    pathMatch: 'full' 
  },
  {
    path: 'spares',
    component: SparesComponent
  },
  {
    path: 'about',
    component: SpareAboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
