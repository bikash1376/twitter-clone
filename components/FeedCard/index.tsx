import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all duration-200 cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1 mr-2">
          <Image
            src="https://avatars.githubusercontent.com/u/139378098?v=4"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5 className="text-white font-semibold">Piyush Garg</h5>
          <p className="text-gray-300">
            Day orders ensure that the stock order doesn’t get carried over to
            the next day. For example, if you place an order for 100 shares of a
            stock at ₹500.
          </p>
          <div className="flex text-gray-500 justify-between mt-3 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
