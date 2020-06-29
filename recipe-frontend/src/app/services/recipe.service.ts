import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  /* get all recipies */
  getAll() {
    return this.http.get(`${baseUrl}/${'allRecipes'}`)
  }
  /* get all categories */
  getAllCategories() {
    return this.http.get(`${baseUrl}/${'categoryName'}`)
  }
  /* find recipes by category */
  findByCategory(cat_name){
    return this.http.get(`${baseUrl}/${'recipeByCat'}?cat_name=${cat_name}`)
  }
  /* search by title */
  searchByTitle(name){
    return this.http.get(`${baseUrl}/${'searchByTitle'}?name=${name}`)
  }
  /* get details by id */
  getById(id) {
    return this.http.get(`${baseUrl}/${'getById'}/${id}`);
  }
}
