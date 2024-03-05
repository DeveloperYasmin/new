"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div>
      <h1>Hi iam navlink</h1>
    </div>
  );
};

export default NavLink;
