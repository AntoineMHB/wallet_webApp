import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"


const BudgetsCard = () => {
  return (
    <div>
        <Card className="w-[1060px] h-[328px] bg-backgroundColor">
            <div className="flex justify-items items-center grid md:grid-cols-1 xl:grid-cols-3 gap-[5px]">
                 <Card className="w-[328px] h-[60px] bg-white ">Food</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Leisure</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Trip</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Holidays</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Daily Transportation</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Emergency</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Dreams</Card>
                 <Card className="w-[328px] h-[60px] bg-white ">Short Term Projects</Card>

                <Card className="w-[328px] h-[60px] bg-white flex justify-center items-center">
                   <CardHeader>
                       <div>
                          <div className="">
                             <CardTitle className="text-[12px]">Long Term Projects</CardTitle>
                     
                          {/* <MdAccountBalance size={24} className="text-customDarkGray ml-[20px]"/> */}
                     
                         </div>
                    
                    <CardDescription className="text-green-500 text-[10px] mt-[5px] font-bold">$1800.30</CardDescription>
                    
                  </div>
                  </CardHeader>

                    {/* <CardFooter className="text-[10px]">Balance of the current month</CardFooter> */}

               </Card>
            </div>
        </Card>
    </div>
  )
}

export default BudgetsCard