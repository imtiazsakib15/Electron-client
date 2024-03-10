export const metadata = {
  title: "Create New Category | Electron",
  description: "...",
};

import CreateCategory from "@/components/CreateCategory/CreateCategory";

const CreateCategoryPage = () => {
  return (
    <div className="h-screen w-full grid place-items-center px-4 sm:px-8 lg:px-12">
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center pb-8">
          Create New Category
        </h1>
        <CreateCategory />
      </div>
    </div>
  );
};

export default CreateCategoryPage;
