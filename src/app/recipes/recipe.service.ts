import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
