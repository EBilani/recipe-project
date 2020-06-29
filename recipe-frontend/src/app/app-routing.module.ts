import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component:HomeComponent},
  { path: 'recipes', component: RecipesComponent },
  { path: 'home/:cat_name', component: CategoryComponent },
  { path: 'home/detail/:id', component: RecipeDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
