"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
   <Link href="/">Home Page</Link>
  );
};

export default NavLink;