import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-8 py-3'>
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Next.js Logo"
          width={50}
          height={17}
          priority
        />
      </Link>
      <Link
        href={"/create"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
