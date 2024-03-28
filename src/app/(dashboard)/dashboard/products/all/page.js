import { getAllProduct, updateProductInfo } from "@/actions/productActions";
import AllProductTable from "@/components/AllProductTable/AllProductTable";

export const metadata = {
  title: "All Product | Electron",
  description: "...",
};

const AllProductPage = async () => {
  const products = await getAllProduct();

  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-6 text-center">
        All Product
      </h1>
      <AllProductTable
        products={products}
        updateProductInfo={updateProductInfo}
      />
    </div>
  );
};

export default AllProductPage;
