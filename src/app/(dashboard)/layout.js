import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-60">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default layout;
