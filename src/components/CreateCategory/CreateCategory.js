"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { FaUpload } from "react-icons/fa6";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Input
        type="name"
        label="Category Name"
        {...register("name", {
          required: "This field is required",
        })}
        variant="bordered"
        color={errors.name ? "danger" : "success"}
        errorMessage={errors?.name?.message}
        className="w-full"
      />
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

export default CreateCategory;