import CreateProduct from "@/components/CreateProduct/CreateProduct";
import { saveProductInfo } from "@/actions/productActions";

export const metadata = {
  title: "Create New Product | Electron",
  description: "...",
};

const CreateProductPage = () => {
  return (
    <div className="h-screen w-full lg:w-[1140px] lg:mx-auto grid place-items-center px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14">
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center pb-8">
          Create New Product
        </h1>
        <CreateProduct saveProductInfo={saveProductInfo} />
      </div>
    </div>
  );
};

export default CreateProductPage;
