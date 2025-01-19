import { useState } from "react";
import axios from "axios";


const AddBudgetForm = ({ onBudgetAdded }) => {
    
    const [budgetAmount, setBudgetAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        
            // Retrieve the userId from localStorage
            const userData = JSON.parse(localStorage.getItem("user"));
            const userId = userData.userId;
            console.log(userId);

            if (!userId) {
                throw new Error("User ID not found. Please log in");
            }
           
            // Now we send the request with the user ID
            const response = await axios.post("http://localhost:8080/api/budgets", {
                    
                    
                    amount: budgetAmount,
                    user: { id: userId }, // we include the userID in the payload wrapped in the user object
                
            });

            onBudgetAdded(response.data);
            setBudgetAmount("");
        } catch (error) {
            console.error("Error adding account:", error.response || error.message || error);
            alert(error.response?.data?.message || "An error occured while adding the account. Please try again.");
        }
    };

    const handleCancel = () => {
        // Close the pop-up without adding a budget
        onBudgetAdded(null); 
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            <input 
              type="number"
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(e.target.value)}
              placeholder="Max Budget Amount"
              className="border p-2"
              required
            />

            <div className="flex space-x-20 justify-center">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-full">
                Set Budget
              </button>

              <button type="button" className="bg-red-500 text-white p-2 rounded-full" onClick={handleCancel}>
                Cancel
              </button>

            </div>

            
        </form>
    );
};

export default AddBudgetForm;