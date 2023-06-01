export interface Recipe {
  id: number | null;
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
