import { getAllUser } from "@/actions/userActions";
import AllUserTable from "@/components/AllUserTable/AllUserTable";

export const metadata = {
  title: "All User | Electron",
  description: "...",
};

const AllUserPage = async () => {
  const users = await getAllUser();

  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All User
      </h1>
      <AllUserTable users={users} />
    </div>
  );
};

export default AllUserPage;
