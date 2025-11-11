//@'
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
}));
//'@ | Out-File -FilePath src\store\recipeStore.js -Encoding utf8
