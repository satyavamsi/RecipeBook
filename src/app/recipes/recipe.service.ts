import { Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'this is simple a test',
      'http://cdnwp.audiencemedia.com/wp-content/uploads/2015/' +
      '04/513716-1-eng-GB_lamb-shank-recipes-960x420.jpg',
      [new Ingredient('Meat',1),
        new Ingredient('French Fries',5)]),
    new Recipe('A test Recipe',
      'this is simple a test',
      'http://cdnwp.audiencemedia.com/wp-content/uploads/2015/' +
      '04/513716-1-eng-GB_lamb-shank-recipes-960x420.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Blueberries',15)
      ])
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
