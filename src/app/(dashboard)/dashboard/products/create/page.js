import CreateProduct from "@/components/CreateProduct/CreateProduct";

export const metadata = {
  title: "Create New Product | Electron",
  description: "...",
};

const CreateProductPage = () => {
  return (
    <div className="h-screen w-full grid place-items-center px-4 sm:px-8 lg:px-12">
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center pb-8">
          Create New Product
        </h1>
        <CreateProduct />
      </div>
    </div>
  );
};

export default CreateProductPage;
