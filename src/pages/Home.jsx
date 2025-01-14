import BudgetsCard from "@/components/BudgetsCard";
import RevenueCard from "@/components/RevenueCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BalanceCard from "../components/BalanceCard";
import ExpensesCard from "../components/ExpensesCard";

const Home = () => {
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
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border">Add Revenue</Button>
          
              <Button
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border">Add Budget</Button>
            
              <Button 
                variant="secondary" 
                className="bg-white mt-[10px] rounded-[25px] font-bold font-poppins border">Add Expense</Button>
            </div>
          </Card>
        </div>
     {/* but the name should be coming from the username of the user */}

     </div>

      {/* ALL THE CARDS */}
      <div className="p-5">
        <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-4">
            <RevenueCard/>
            <ExpensesCard/>
            <BalanceCard/>
        </div>
      </div>

      {/* "ALL THE BUDGETS" TEXT */}

      <div className="ml-[78px] text-xl font-semibold text-customBlack font-poppins font-size[24px]">All your budgets</div>

      {/* BUDGETS CARD */}
      
      <div className="ml-[20px] mt-[20px] mb-[20px]">
        <BudgetsCard/>
      </div>
      

    </div>
  )
}

export default Home;