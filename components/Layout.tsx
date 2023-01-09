import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
return (
  <>
  <Nav/>
  <div>{children}</div>
  <Footer/>
  </>
)
  
};

export default Layout;
