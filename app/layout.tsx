
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";



interface RootLayoutProps {
  children: React.ReactNode;
showFooter: boolean
}


export default function RootLayout({ children , showFooter}: RootLayoutProps) {

  return (
    <html>
      <head />
      <body>
        <Nav />
        {children}
        <Footer/>
 
      </body>
    </html>
  );
}
