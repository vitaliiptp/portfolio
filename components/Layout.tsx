import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactMeContainer from "./ContactMeContainer";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Navbar />
        <main>{children}</main>
          <ContactMeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
