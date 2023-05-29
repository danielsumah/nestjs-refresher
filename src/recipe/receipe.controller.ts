import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Recipe } from './dto/recipe.dto';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}
  @Get()
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }

  @Get(':id')
  getRecipe(@Param('id') id: number): Recipe {
    return this.recipeService.getRecipe(id);
  }

  @Post('create')
  createRecipe(@Body() recipeDto: Recipe) {
    return this.recipeService.createRecipe(recipeDto);
  }

  @Post('update/:id')
  updateRecipe(@Body() recipeDto: Recipe, @Param('id') id: number): Recipe {
    return this.recipeService.updateRecipe(recipeDto, id);
  }

  @Delete('delete')
  deleteRecipe(@Param('id') id: number): object {
    return { message: `recipe ${id} deleted` };
  }
}
