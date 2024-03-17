export const metadata = {
  title: "All Category | Electron",
  description: "...",
};

import { getAllCategory } from "@/actions/categoryActions";
import AllCategory from "@/components/AllCategory/AllCategory";

const AllCategoryPage = async () => {
  const categories = await getAllCategory();

  return (
    <div className="mx-auto py-8 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All Category
      </h1>
      <AllCategory categories={categories} />
    </div>
  );
};

export default AllCategoryPage;
