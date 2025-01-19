import { useState } from "react";
import axios from "axios";
//import jwt_decode from "jwt-decode";

const AddAccountForm = ({ onAccountAdded }) => {
    const [accountName, setAccountName] = useState("");
    const [accountAmount, setAccountAmount] = useState("");

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
            const response = await axios.post("http://localhost:8080/api/accounts", {
                    
                    name: accountName,
                    amount: accountAmount,
                    user: { id: userId }, // we include the userID in the payload wrapped in the user object
                
            });

            onAccountAdded(response.data);
            setAccountName("");
            setAccountAmount("");
        } catch (error) {
            console.error("Error adding account:", error.response || error.message || error);
            alert(error.response?.data?.message || "An error occured while adding the account. Please try again.");
        }
    };

    const handleCancel = () => {
        // Close the pop-up without adding an account
        onAccountAdded(null); 
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input 
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Account Name"
              className="border p-2"
              required
            />

            <input 
              type="number"
              value={accountAmount}
              onChange={(e) => setAccountAmount(e.target.value)}
              placeholder="Account Amount"
              className="border p-2"
              required
            />

            <div className="flex space-x-20 justify-center">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-full">
                Add Account
              </button>

              <button type="button" className="bg-red-500 text-white p-2 rounded-full" onClick={handleCancel}>
                Cancel
              </button>

            </div>

            
        </form>
    );
};

export default AddAccountForm;