const Container = ({ children }) => {
  return (
    <div className="2xl:container mx-auto px-4 sm:px-8 lg:px-12">
      {children}
    </div>
  );
};

export default Container;
