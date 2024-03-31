import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

const RootLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
