import { useState } from "react";
import RevenueCard from "@/components/BudgetCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BalanceCard from "../components/BalanceCard";
import ExpensesCard from "../components/ExpensesCard";
import AccountsCard from "@/components/AccountsCard";
import AddAccountForm from "@/components/forms/AddAccountForm";
import AddBudgetForm from "@/components/forms/AddBudgetForm";
import BudgetCard from "@/components/BudgetCard";
import AddCategoryForm from "@/components/forms/AddCategoryForm";
import AddExpenseForm from "@/components/forms/AddExpenseForm";

const Home = () => {
  const [showAddAccountForm, setShowAddAccountForm] = useState(false); // State to control the form visibility
  const [showAddBudgetForm, setShowAddBudgetForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

  // Function to handle the display of the Add Account form
  const handleAddAccountClick = () => {
    setShowAddAccountForm(true);
  };

  // Function to close the Add Account form
  const handleAccountAdded = () => {
    setShowAddAccountForm(false); // Close the form after adding an account
  };


    // Function to handle the display of the Add Budget form
    const handleAddBudgetClick = () => {
      setShowAddBudgetForm(true);
    };
  
    // Function to close the Add Budget form
    const handleBudgetAdded = () => {
      setShowAddBudgetForm(false); // Close the form after adding an budget
    };


     // Function to handle the display of the Add Category form
     const handleAddCategoryClick = () => {
      setShowAddCategoryForm(true);
    };
  
    // Function to close the Add Category form
    const handleCategoryAdded = () => {
      setShowAddCategoryForm(false); // Close the form after adding a Category
    };


       // Function to handle the display of the Add Expense form
       const handleAddExpenseClick = () => {
        setShowAddExpenseForm(true);
      };
    
      // Function to close the Add Expense form
      const handleExpenseAdded = () => {
        setShowAddExpenseForm(false); // Close the form after adding a Expense
      };

  return (
    <div className="bg-backgroundColor">
         {/* THE DASHBOARD TEXT */}
      <div className="ml-[78px] mt-[35px] mb-[20px] grid md:grid-cols-1 xl:grid-cols-2 gap-[5px]">
        <div>
          <h1 className='text-4xl font-extrabold text-customBlack font-poppins'>Dashboard</h1>
          <p className='text-xl font-medium text-customDarkGray font-poppins'>welcome back, Antoine</p>
        </div>
        
        <div >
          <Card className="w-[500px] h-[60px] bg-backgroundColor">
            <div className="flex justify-center items-center space-x-10">
              <Button 
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border"
                onClick={handleAddAccountClick}
              >
                Add Account</Button>
          
              <Button
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border"
                onClick={handleAddBudgetClick}
              >Set Budget</Button>
            
              <Button 
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border"
                onClick={handleAddExpenseClick}>Add Expense</Button>

                
              <Button 
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border"
                onClick={handleAddCategoryClick}>Add Category</Button>
            </div>
          </Card>
        </div>
     {/* but the name should be coming from the username of the user */}

     </div>

      {/* ALL THE CARDS */}
      <div className="p-5">
        <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-4">
            {/* <BudgetCard/> */}
            <ExpensesCard/>
            <BalanceCard/>
        </div>
      </div>

      {/* "ALL THE BUDGETS" TEXT */}

      <div className="ml-[78px] text-xl font-semibold text-customBlack font-poppins font-size[24px]">All your accounts</div>

      {/* ACCOUNTS CARD */}
      
      <div className="ml-[20px] mt-[20px] mb-[20px]">
        <AccountsCard/>
      </div>

       {/* Pop-up for Add Account */}
       {showAddAccountForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Add Account</h2>
            <AddAccountForm onAccountAdded={handleAccountAdded} />
          </div>
        </div>
      )}

       {/* Pop-up for Add Budget */}
       {showAddBudgetForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
            <AddBudgetForm onBudgetAdded={handleBudgetAdded} />
          </div>
        </div>
      )}
      
      {/* Pop-up for Add Category */}
      {showAddCategoryForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Add Category</h2>
            <AddCategoryForm onCategoryAdded={handleCategoryAdded} />
          </div>
        </div>
      )}


      {/* Pop-up for Add Expense */}
      {showAddExpenseForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
            <AddExpenseForm onCategoryAdded={handleCategoryAdded} />
          </div>
        </div>
      )}
      

    </div>
  )
}

export default Home;