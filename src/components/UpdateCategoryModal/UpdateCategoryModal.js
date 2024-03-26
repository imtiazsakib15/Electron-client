import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa6";
import { toast } from "sonner";

const UpdateCategoryModal = ({
  category,
  updateCategoryInfo,
  isOpen,
  onOpenChange,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.image[0];
    const imageUrl = await uploadImageToCloudinary(image);

    const updatedCategory = { name: data.name, image: imageUrl };
    const result = await updateCategoryInfo(category?._id, updatedCategory);

    if (result?._id) {
      toast.success("Category updated successfully!");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update category
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <Input
                    type="name"
                    label="Category Name"
                    {...register("name", {
                      required: "This field is required",
                    })}
                    defaultValue={category.name}
                    variant="bordered"
                    color={errors.name ? "danger" : "success"}
                    errorMessage={errors?.name?.message}
                    className="w-full"
                  />
                  <div className="relative">
                    {/* <Image
                      src={category?.image}
                      alt="category image"
                      width={300}
                      height={400}
                    /> */}
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
                  <div className="text-end space-x-4 pb-6">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button type="submit" color="success" onPress={onClose}>
                      Update
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateCategoryModal;
