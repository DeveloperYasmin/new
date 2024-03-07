"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
   <Link href="/about">Home Page</Link>
  );
};

export default NavLink;