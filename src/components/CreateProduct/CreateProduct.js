"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { FaUpload } from "react-icons/fa6";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { toast } from "sonner";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <Input
          type="name"
          label="Product Name"
          {...register("name", {
            required: "This field is required",
          })}
          variant="bordered"
          color={errors.name ? "danger" : "success"}
          errorMessage={errors?.name?.message}
          className="w-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Input
          type="number"
          label="Current price"
          {...register("price", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Price can't be less than zero",
            },
          })}
          variant="bordered"
          color={errors.price ? "danger" : "success"}
          errorMessage={errors?.price?.message}
          className="w-full"
        />
        <Input
          type="number"
          label="Old price"
          {...register("old_price", {
            min: {
              value: 0,
              message: "Old price can't be less than zero",
            },
          })}
          variant="bordered"
          color={errors.old_price ? "danger" : "success"}
          errorMessage={errors?.old_price?.message}
          className="w-full"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <Input
          type="text"
          label="Category"
          {...register("category", {
            required: "This field is required",
          })}
          variant="bordered"
          color={errors.category ? "danger" : "success"}
          errorMessage={errors?.category?.message}
          className="w-full"
        />
        <Input
          type="text"
          label="Availability"
          {...register("availability", {
            required: "This field is required",
          })}
          variant="bordered"
          color={errors.availability ? "danger" : "success"}
          errorMessage={errors?.availability?.message}
          className="w-full"
        />
      </div>
      <div className="relative">
        <label htmlFor="image">
          <div className="w-max flex items-center gap-1 px-6 py-3 bg-green-600 text-white font-semibold cursor-pointer">
            <FaUpload />
            Choose Image
          </div>
        </label>
        <input
          className="absolute -z-10 w-0.5 h-0.5 opacity-0"
          id="image"
          type="file"
          label="Image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
        {errors?.image?.message && (
          <p className="text-[#F31260] text-xs py-1">
            {errors?.image?.message}
          </p>
        )}
      </div>
      <button type="submit">
        <Button>Add Category</Button>
      </button>
    </form>
  );
};

export default CreateProduct;
