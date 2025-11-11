//@'
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        addRecipe({ id: Date.now(), title: title.trim(), description: description.trim() });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <h2>Add Recipe</h2>
            <div style={{ marginBottom: 8 }}>
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', padding: 8 }}
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <textarea
                    placeholder="Recipe Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: '100%', padding: 8, minHeight: 80 }}
                />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
//'@ | Out-File -FilePath src\components\AddRecipeForm.jsx -Encoding utf8
