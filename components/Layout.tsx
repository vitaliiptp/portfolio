import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
