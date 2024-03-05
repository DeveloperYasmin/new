"use client";

import { useState } from "react";
import NavLink from "../navlink/navlink";
import Image from "next/image";
import { handleLogout } from "@/app/lib/action";
import Link from "next/link";

const Links = ({session}) => {
  return(
    <div>
      <ul>
        <li>
        <Link href="/">Home</Link>
          </li>
          <li>
        <Link href="/about">About</Link>
          </li> <li>
        <Link href="/contact">Contact</Link>
          </li>
      </ul>
  </div>)
};

export default Links;