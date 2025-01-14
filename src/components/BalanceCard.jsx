import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const BalanceCard = () => {
  return (
    <div>
        <Card className="border">
            <CardHeader>
                <div>
                   <div className="flex justify-center items-center">
                     <CardTitle>Total Balance</CardTitle>
                     
                       {/* <MdAccountBalance size={24} className="text-customDarkGray ml-[20px]"/> */}
                     
                   </div>
                    
                    <CardDescription className="flex justify-center items-center text-green-500 font-size-[60px] mt-[60px] font-extrabold">$1800.30</CardDescription>
                    
                </div>
            </CardHeader>

            <CardFooter className="flex justify-center items-center mt-[50px]">Balance of the current month</CardFooter>

        </Card>
    </div>
  
  )
}

export default BalanceCard;