// eslint-disable-next-line no-unused-vars
import { GoBell } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-backgroundColor">
    <div className="flex items-center space-x-4 md:space-x-10">
      <div className="hidden md:flex ml-[64px] mt-[35px]">
        <p className='text-xl font-medium text-customBlack font-poppins font-size-[16px] mr-[5px]'>Sort:</p>
        <input
          type="text" 
          placeholder="Last week" 
          className="bg-white px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-customGray h-[34px] w-[140px] border"

        />
      </div>
     
    </div>
    <div className='flex items-center space-x-2 md:space-x-5'>
     <div className='flex items-center space-x-4 md:space-x-20'>
        <button className="relative text-2xl text-customGray">
          <GoBell size={25}/>
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-notificationPink text-customWhite font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
        </button>
        <img 
          className='w-8 g-8 rounded-full border-2' 
          src='https://randomuser.me/api/portraits/women/50.jpg' 
          alt='' />

        <div>
         <p className='text-xl font-semibold text-customBlack font-poppins font-size-[20px]'>Antoine Nzanzu</p>
         <p className='text-xl font-light text-customDarkGray font-poppins font-size-[14px]'>antoinenzanzu@gmail.com</p>
        </div>

        </div>

    
    </div>
    </div>
  );
  
};

export default Header;