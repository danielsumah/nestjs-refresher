import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Recipe } from './dto/recipe.dto';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}
  @Post('create')
  createRecipe(@Body() recipeDto: Recipe) {
    return this.recipeService.createRecipe(recipeDto);
  }

  @Get()
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }

  @Get(':id')
  getRecipe(@Param('id') id: number): Recipe {
    return this.recipeService.getRecipe(id);
  }

  @Post('update/:id')
  updateRecipe(@Body() recipeDto: Recipe, @Param('id') id: number): Recipe {
    return this.recipeService.updateRecipe(recipeDto, id);
  }

  @Delete('delete/:id')
  deleteRecipe(@Param('id') id: number): object {
    return this.recipeService.deleteRecipe(id);
  }
}
