import { IoIosTrendingUp } from "react-icons/io";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react"
import axios from "axios";

const chartData = [
  { month: 'January', value: 186 },
  { month: 'February', value: 305 },
  { month: 'March', value: 237 },
  { month: 'April', value: 73 },
  { month: 'May', value: 209 },
  { month: 'June', value: 214 },
];

const BudgetCard = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        // Retrieve the userId from localStorage
        const userData = JSON.parse(localStorage.getItem("user"));
        const userId = userData.userId;
        console.log(userId);

        if (!userId) {
          console.error("User not logged in, unable to fecth accounts.");
          return;
        }

        // Fetch the accounts of the logged-in user
        const response = await axios.get(`http://localhost:8080/api/budgets/user/${userId}`);
        setBudgets(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching acconts:", error);
        setLoading(false);
      }
    };

    fetchBudgets();
  }, []);

  if (loading){
    return (
      <Card className="border">
        <CardHeader>
          <div>
            <div className="flex items-center justify-between">
              <CardTitle>Max Budget</CardTitle>
              <TrendingUp className="h-6 w-6 text-gray-500" />
            </div>
            <CardDescription>Loading...</CardDescription>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div>
        <Card className="border">
            <CardHeader>
            <div>
          <div className="flex items-center justify-between">
            <CardTitle>Max Budget</CardTitle>
            <TrendingUp className="h-6 w-6 text-gray-500" />
          </div>
          {budgets ? (
            <CardDescription className="text-green-500 font-medium">
              ${budgets.amount.toFixed(2)}
            </CardDescription>
          ) : (
            <div className="flex items-center gap-2 mt-2">
              <AlertCircle className="h-4 w-4 text-gray-500" />
              <CardDescription>No budget set yet</CardDescription>
            </div>
          )}
        </div>
            </CardHeader>
        </Card>
    </div>
  )
}

export default BudgetCard;