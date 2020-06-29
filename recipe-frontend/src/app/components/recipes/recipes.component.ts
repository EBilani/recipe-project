import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
recipes: any;
currentRecipe = null;
currentIndex = -1;
name = '';
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.retrieveRecipes();
  }

  retrieveRecipes(){
   return this.recipeService.getAll()
    .subscribe(
      data => {
        this.recipes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
