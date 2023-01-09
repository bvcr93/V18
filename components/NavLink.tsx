import Link from "next/link";
import React from "react";
type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      className={`navLink  ${
        isActive && " underline decoration-black underline-offset-8  "
      }`}
      href={`/${category}`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
