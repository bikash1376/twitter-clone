import React from 'react';
import { BiHomeCircle, BiHash, BiUser, BiMoney } from 'react-icons/bi';
import {BsTwitter, BsBell, BsEnvelope, BsBookmark} from 'react-icons/bs';
import { Inter } from 'next/font/google';
import FeedCard from '@/components/FeedCard';
import { SlOptions } from 'react-icons/sl';

const inter = Inter({ subsets: ['latin'] })

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },   
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notifications',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney/>

  },
  {
    title: 'Profile',
    icon: <BiUser />
  },
  {
    title: 'More',
    icon: <SlOptions/>
  }
]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1  px-4 ml-5">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all duration-200">
          <BsTwitter />
          </div>
          <div className='mt-2 text-xl pr-4'>
            <ul>
            {sidebarMenuItems.map((item) => (
              <li className='flex text-xl justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 w-fit  mt-2' key={item.title}>
                <span>{item.icon}</span>
                <span> {item.title}</span>
              </li>
            ))}
            </ul>
            <button className='bg-[#1d9bf0] text-xl mt-5 p-4 rounded-full w-full'>Tweet</button>
          </div>
        
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>

      </div>

    </div>
  );
}
