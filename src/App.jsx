//@'
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
//'@ | Out-File -FilePath src\App.jsx -Encoding utf8
