import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl" style={{ height: `${NAVBAR_HEIGHT}px` }}>
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href={"/"} className="cursor-pointer hover:!text-primary-300" scroll={false}>
            <div className="flex items-center gap-3">
              <Image src={"/logo.svg"} height={24} width={24} alt="Rentiful Logo" className="size-6" />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 font-light hover:!text-secondary-300">IFUL</span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>
        <div className="flex items-center gap-5">
          <Link href={"/signin"}>
            <Button
              variant={"outline"}
              className="text-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button
              variant={"outline"}
              className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
