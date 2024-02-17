import NavBar from "@/components/NavBar/NavBar";

const RootLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default RootLayout;
