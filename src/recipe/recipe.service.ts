import { Recipe } from './dto/recipe.dto';

export class RecipeService {
  private readonly recipes: Recipe[] = [
    {
      id: 1,
      meal: 'Rice and Beans',
      country: 'NG',
      duration: '2 hrs',
      steps: [],
      ingredients: [],
    },
  ];
  createRecipe(recipeDto: Recipe) {
    const data = {
      ...recipeDto,
      id: this.getLastId() + 1,
      steps: [],
      ingredients: [],
    };
    this.recipes.push(data);
    return data;
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    const index: number = this.recipes.findIndex((reci) => {
      return reci.id === parseInt(id.toString());
    });

    if (index >= 0) {
      return this.recipes[index];
    }

    return null;
  }

  getLastId(): number {
    return this.recipes.length;
  }

  updateRecipe(recipeDto: Recipe, id: number): Recipe {
    const index: number = this.recipes.findIndex((reci) => {
      return reci.id === parseInt(id.toString());
    });
    if (index >= 0) {
      this.recipes[index] = { ...this.recipes[index], ...recipeDto };
      return this.getRecipe(id);
    }
    return null;
  }

  deleteRecipe(id: number): object {
    const index: number = this.recipes.findIndex((reci) => {
      return reci.id === parseInt(id.toString());
    });

    if (index >= 0) {
      delete this.recipes[index];
      return { message: `recipe ${id} deleted` };
    }
    return null;
  }
}
