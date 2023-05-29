import { Recipe } from './dto/recipe.dto';

export class RecipeService {
  private readonly recipes: Recipe[];
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find((reci) => reci.id === id);
  }

  createRecipe(recipeDto: Recipe) {
    return recipeDto;
  }

  updateRecipe(recipeDto: Recipe, id: number): Recipe {
    const index: number | undefined = this.recipes.findIndex(
      (reci) => reci.id === id,
    );
    if (index) {
      this.recipes[index] = recipeDto;
      return recipeDto;
    }
    return null;
  }

  deleteRecipe(id: number): object {
    return { message: `recipe ${id} deleted` };
  }
}
