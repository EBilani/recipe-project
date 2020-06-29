import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 name=null;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.getRecipesByCat(this.route.snapshot.paramMap.get('cat_name'));
  }
  getRecipesByCat(cat_name){
    this.recipeService.findByCategory(cat_name)
     .subscribe(
       data=>{
         this.name=data;
        console.log(data);
       },
       error => {
        console.log(error);
      });

  }

}
