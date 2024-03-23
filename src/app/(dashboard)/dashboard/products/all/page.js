import { getAllProduct } from "@/actions/productActions";

export const metadata = {
  title: "All Product | Electron",
  description: "...",
};

const AllCategoryPage = async () => {
  const products = await getAllProduct();
  console.log(products);

  return (
    <div className="mx-auto py-8 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All Product
      </h1>
    </div>
  );
};

export default AllCategoryPage;
