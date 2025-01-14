

/* eslint-disable no-unused-vars */
import { useState } from 'react';

//ICONS
import { CiSettings } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoHome, IoLogOut } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick= (index)=>{
    setActiveLink(index)
  }

  const SIDEBAR_LINKS = [
    {id:1, path: "/", name:"Dashboard", icon:IoHome},
    {id:2, path: "/budgets", name:"Budgets", icon:TbMoneybag},
    {id:3, path: "/expenses", name:"Expenses", icon:LiaMoneyCheckAltSolid},
    {id:4, path: "/reports", name:"Reports", icon:HiOutlineDocumentReport},
    {id:5, path: "/settings", name:"Settings", icon:CiSettings},
    {id:6, path: "/logout", name:"Logout", icon:IoLogOut},
]

  return (
  <div className="w-20 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-purple rounded-tr-[48px] rounded-br-[48px]">
    {/* logo */} 
    <div className="mt-[5px] ml-[2px] mb-[35px] font-bold text-white">LIKUTA Track</div>

    {/* Navigation Links */}
    <ul className="mt-2 ml-[10px]">
        {
           SIDEBAR_LINKS.map((link, index)=>(
            <li 
              key={link.id}
              className={`${
                index < 3 ? 'mb-[20px]' : index === 3 ? 'mb-[200px]' : 'mb-[20px]'
                } last:mb-0 "text-customGray font-normal hover:text-customWhite hover:bg-customHover ${
                activeLink === index ? "bg-customHover": ""}` }
              >
                <a href={link.path} className="flex justify-center md:justify-start items-center md:space-x-5"
                  onClick={()=>handleLinkClick(index)}
                  >

                  <span className="text-customWhite">{<link.icon/>}</span>
                  <span className="text-sm text-customGray hidden md:flex">{link.name}</span>   
                </a>
            </li>
           )) 
        }
    </ul> 
  </div>
  );
  
};

export default Sidebar;