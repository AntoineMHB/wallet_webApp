import { IoIosTrendingUp } from "react-icons/io";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const chartData = [
  { month: 'January', value: 186 },
  { month: 'February', value: 305 },
  { month: 'March', value: 237 },
  { month: 'April', value: 73 },
  { month: 'May', value: 209 },
  { month: 'June', value: 214 },
];

const RevenueCard = () => {
  return (
    <div>
        <Card className="border">
            <CardHeader>
                <div>
                   <div className="flex items-center space-x-40">
                     <CardTitle>Revenues</CardTitle>
                     
                       <IoIosTrendingUp size={24} className="text-customDarkGray ml-[20px]"/>
                     
                   </div>
                    
                    <CardDescription>$2400.50</CardDescription>
                    <CardContent className="mt-1 flex justify-center items-center h-[200px]">
                        <BarChart width={500} height={300} data={chartData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="month"/>
                            <Tooltip/>
                            <Bar dataKey="value" fill="#8884d8"/>
                        </BarChart>
                    </CardContent>
                </div>
            </CardHeader>
        </Card>
    </div>
  )
}

export default RevenueCard;