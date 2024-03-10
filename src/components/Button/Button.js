const Button = ({ children }) => {
  return (
    <span className="relative inline-block text-xs sm:text-sm font-medium text-green-600 group active:text-green-600 focus:outline-none focus:ring">
      <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block px-6 sm:px-8 py-3 font-semibold bg-[#1A2238] active:bg-opacity-85 border border-current">
        {children}
      </span>
    </span>
  );
};

export default Button;
