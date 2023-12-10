import React from "react";
import { Link } from "react-router-dom";
import { LeftDrawer } from "./LeftDrawer";
import { RightDrawer } from "./RightDrawer";

export const Header = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-xl flex items-center justify-between px-8 py-4 z-40">
      <LeftDrawer />
      <Link to="">
        <h1 className="text-lg">RUDRA KUSH</h1>
      </Link>
      <RightDrawer />
    </header>
  );
};
