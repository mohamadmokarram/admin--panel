import Link from "next/link";
import Image from "next/image";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    // sidebar div
    <div className="fixed w-20 h-screen bg-white p-4 border-r-[1px] flex flex-col justify-betweeen">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="text-center bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo className="text-2xl" />
          </div>
        </Link>
      </div>

      <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

      <Link href="/">
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <RxDashboard className="text-2xl" />
        </div>
      </Link>
      <Link href="/customers">
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <RxPerson className="text-2xl" />
        </div>
      </Link>
      <Link href="/orders">
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
      </Link>
      <Link href="/">
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <FiSettings className="text-2xl" />
        </div>
      </Link>
    </div>
  );
}
