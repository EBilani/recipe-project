import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
detail:any;

  constructor( private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.getRecipesById(this.route.snapshot.paramMap.get('id'));
  }
  getRecipesById(id){
    this.recipeService.getById(id)
     .subscribe(
       data=>{
         this.detail=data;
        console.log(data);
       },
       error => {
        console.log(error);
      });

  }
}
