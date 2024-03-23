import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/"> Crash Course</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

// All the componenets that you will make by default are gonna be RSC react server component
// which means that you cannot use useState and useEffect functions with this component
// it will give you an error just on even importiong those functions
// If you want to make it a client component just use this line at the top of the code
// 'use client';
// Then you will be able to use useState and useEffect hooks in this component 