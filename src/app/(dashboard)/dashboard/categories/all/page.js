export const metadata = {
  title: "All Category | Electron",
  description: "...",
};

import { getAllCategory } from "@/actions/categoryActions";
import AllCategory from "@/components/AllCategory/AllCategory";

const AllCategoryPage = async () => {
  const categories = await getAllCategory();
  console.log(categories);

  return (
    <div className="mx-auto py-8 sm:py-10 lg:py-14">
      <AllCategory categories={categories} />
    </div>
  );
};

export default AllCategoryPage;
