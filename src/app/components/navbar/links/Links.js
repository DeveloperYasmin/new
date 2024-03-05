"use client";

import { useState } from "react";
import NavLink from "../navlink/navlink";
import Image from "next/image";
import { handleLogout } from "@/app/lib/action";
import Link from "next/link";

const Links = ({session}) => {
  return(
    <div>
      <NavLink/>
  <Link href="/about">Home</Link>
  </div>)
};

export default Links;