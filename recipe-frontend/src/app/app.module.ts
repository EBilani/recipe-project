import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlipModule } from 'ngx-flip';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HomeComponent,
    CategoryComponent,
    RecipeDetailComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FlipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
