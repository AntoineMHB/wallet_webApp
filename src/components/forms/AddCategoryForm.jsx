import { useState } from "react";
import axios from "axios";

const AddCategoryForm = ({ onCategoryAdded }) => {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the category data to the backend
            const response = await axios.post("http://localhost:8080/api/categories", {
                category_name: categoryName,
            });

            const newCategory = response.data;

            // Notify parent component
            onCategoryAdded(newCategory);

            // Save category to local storage
            const existingCategories = JSON.parse(localStorage.getItem("categories")) || [];
            existingCategories.push(newCategory);
            localStorage.setItem("categories", JSON.stringify(existingCategories));

            // Reset form
            setCategoryName("");
            alert("Category added successfully and saved locally!");
        } catch (error) {
            console.error("Error adding category:", error.response || error.message || error);
            alert(error.response?.data?.message || "An error occurred while adding the category. Please try again.");
        }
    };

    const handleCancel = () => {
        // Notify parent that no category was added
        onCategoryAdded(null);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category Name"
                className="border p-2"
                required
            />

            <div className="flex space-x-4">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Category
                </button>
                <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddCategoryForm;
