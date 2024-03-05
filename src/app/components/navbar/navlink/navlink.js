"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${""} ${
        pathName === item.path 
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;