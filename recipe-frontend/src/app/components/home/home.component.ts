import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any;
  recipes:any;
  title: '';
  currentIndex = -1;
  flipDiv=false;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }

  ngOnInit(): void {
    this.retrieveCategories();

    //list submenu
    $(document).ready(function () {
      $('.nav-item-list').hover(
        function () {
          $(this).children('.file-menu').slideDown(400);
        },
        function () {
          $(this).children('.file-menu').slideUp(400);
        }
      );
    });
  }
  retrieveCategories() {
    return this.recipeService.getAllCategories()
      .subscribe(
        catData => {
          this.categories = catData;
          console.log(catData);
        },
        error => {
          console.log(error);
        }
      )
  }
  makeDropdown() {
    let x = document.getElementById("nav");
    if (x.className === "nav-item") {
      x.className += "-responsive";
    }
    else {
      x.className = "nav-item";
    }
  }
  //search by name of a recipe
  searchByTitle(){
    document.getElementById('title-search').style.display='block';
    return this.recipeService.searchByTitle(this.title)
      .subscribe(
        searchData=>{
          if (!this.title==null){
            this.recipes=searchData;
            console.log(searchData);
          }
          else{
            console.log("no results");
          }

        },

      );
  }


}
