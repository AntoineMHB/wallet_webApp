import { useState, useEffect } from "react";
import axios from "axios";

const AddExpenseForm = ({ onExpenseAdded }) => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [categories, setCategories] = useState([]);
    const [accounts, setAccounts] = useState([]);

    // Fetch categories and accounts from localStorage on component mount
    useEffect(() => {
        const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
        const savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
        setCategories(savedCategories);
        setAccounts(savedAccounts);

        // Set the first category and account by default if available
        if (savedCategories.length > 0) setSelectedCategory(savedCategories[0].id);
        if (savedAccounts.length > 0) setSelectedAccount(savedAccounts[0].id);     
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for both category and account
        if (!selectedCategory || !selectedAccount) {
            alert("Please select both category and account.");
            return;
        }

        try {

              // Retrieve the userId from localStorage
              const userData = JSON.parse(localStorage.getItem("user"));
              const userId = userData.userId;
              console.log(userId);
  
              if (!userId) {
                  throw new Error("User ID not found. Please log in");
              }


            // Send the expense data to the backend, with selected categoryId and accountId
            const response = await axios.post("http://localhost:8080/api/expenses", {
                amount: amount,
                description: description,
                date: date,
                category: { id: selectedCategory },  // Passing categoryId
                account: { id: selectedAccount },  
                user: { id: userId },  // Passing accountId
            });

            // Notify parent component and reset the form
            onExpenseAdded(response.data);
            setAmount("");
            setDescription("");
            setDate("");
            setSelectedCategory(null);
            setSelectedAccount(null);
            alert("Expense added successfully!");
        } catch (error) {
            console.error("Error adding expense:", error.response || error.message || error);
            alert(error.response?.data?.message || "An error occurred while adding the expense. Please try again.");
        }
    };

    const handleCancel = () => {
        // Notify parent that no expense was added
        if(onExpenseAdded) {
            onExpenseAdded(null);

        }
       
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="border p-2"
                required
            />

            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border p-2"
                required
            />
            
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2"
                required
            />

            {/* Category dropdown */}
            <select
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border p-2"
                required
            >
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.category_id}>
                        {category.category_name}
                    </option>
                ))}
            </select>

            {/* Account dropdown */}
            <select
                value={selectedAccount || ""}
                onChange={(e) => setSelectedAccount(e.target.value)}
                className="border p-2"
                required
            >
                <option value="">Select Account</option>
                {accounts.map((account) => (
                    <option key={account.id} value={account.account_id}>
                        {account.name}
                    </option>
                ))}
            </select>

            <div className="flex space-x-4">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Expense
                </button>
                <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddExpenseForm;
