"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lato } from "next/font/google";
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/products",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className={`flex gap-8 ${lato.className}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;