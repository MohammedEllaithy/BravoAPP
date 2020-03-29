import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ArticleComponent} from './views/article/article.component'
import{HomeComponent} from './views/home/home.component'



const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'article/:id' , component:ArticleComponent},
  {path:'**' , redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
