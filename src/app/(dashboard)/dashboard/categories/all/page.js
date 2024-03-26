export const metadata = {
  title: "All Category | Electron",
  description: "...",
};

import { getAllCategory, updateCategoryInfo } from "@/actions/categoryActions";
import AllCategoryTable from "@/components/AllCategoryTable/AllCategoryTable";

const AllCategoryPage = async () => {
  const categories = await getAllCategory();

  return (
    <div className="w-full md:max-w-4xl md:mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All Category
      </h1>
      <AllCategoryTable
        categories={categories}
        updateCategoryInfo={updateCategoryInfo}
      />
    </div>
  );
};

export default AllCategoryPage;
