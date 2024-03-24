import { getAllProduct } from "@/actions/productActions";
import AllProductTable from "@/components/AllProductTable/AllProductTable";
export const metadata = {
  title: "All Product | Electron",
  description: "...",
};

const AllProductPage = async () => {
  const products = await getAllProduct();
  console.log(products);

  return (
    <div className="w-full lg:w-[1140px] lg:mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All Product
      </h1>
      <AllProductTable products={products} />
    </div>
  );
};

export default AllProductPage;
