export interface Recipe {
  id: number;
  meal: string;
  duration: string;
  country: string;
  ingredients: Ingredient[];
  steps: string[];
}
export interface Ingredient {
  name: string;
  duration: string;
}
