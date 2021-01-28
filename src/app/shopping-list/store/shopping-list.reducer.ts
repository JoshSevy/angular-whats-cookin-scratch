import { ActionsSubject } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];

      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updateIngredient;

      return {
        ...state,
        ingredients: updatedIngredients;
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      return {

      }
    default:
      return state;
  }
}
