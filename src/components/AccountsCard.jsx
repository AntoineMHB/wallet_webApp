import { useEffect, useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import AddAccountForm from "./forms/AddAccountForm";
import axios from "axios";


const AccountsCard = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
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
        const response = await axios.get(`http://localhost:8080/api/accounts/user/${userId}`);
        setAccounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching acconts:", error);
        aetLoading(false);
      }
    };

    fetchAccounts();
  }, []);

 

  if (loading) {
    return(
      <Card className="w-[1060px] h-auto bg-backgroundColor p-4">
        <div className="flex justify-center items-center h-[60px]">
          <p className="text-customDarkGray">Loading accounts...</p>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <Card className="w-[1060px] h-auto bg-backgroundColor p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {accounts.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center h-[60px] bg-white rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-customDarkGray" />
                <p className="text-customDarkGray">No accounts found. Add an account to get started!</p>
              </div>
            </div>
          ) : (
            accounts.map((account) => (
              <Card key={account.id} className="w-[328px] h-[60px] bg-white">
                <CardHeader>
                  <CardTitle className="text-[12px] text-black">{account.name}</CardTitle>
                  <CardDescription className="text-green-500 text-[10px] mt-[5px] font-bold pb-[10px]">
                    ${account.amount.toFixed(2)}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default AccountsCard;