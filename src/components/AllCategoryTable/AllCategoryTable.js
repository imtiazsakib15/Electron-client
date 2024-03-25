"use client";

import { deleteCategoryInfo } from "@/actions/categoryActions";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import UpdateCategoryModal from "../UpdateCategoryModal/UpdateCategoryModal";
import { useState } from "react";
const AllCategoryTable = ({ categories }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updateCategory, setUpdateCategory] = useState(null);

  const handleDeleteCategory = async (id) => {
    const result = await deleteCategoryInfo(id);

    if (result?._id) {
      toast.success("Category deleted successfully!");
    }
  };

  return (
    <>
      <Table aria-label="All category table">
        <TableHeader>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No category found."}>
          {categories?.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                <Image
                  src={category.image}
                  alt={`${category.name} Image`}
                  width={100}
                  height={100}
                  className="w-28 h-24 rounded-lg"
                />
              </TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell className="flex items-center h-28 gap-4 text-xl">
                <CiEdit
                  onClick={() => {
                    setUpdateCategory(category);
                    onOpen();
                  }}
                  title="UPDATE"
                  className="cursor-pointer"
                />
                <MdDelete
                  onClick={() => handleDeleteCategory(category._id)}
                  title="DELETE"
                  className="text-red-500 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UpdateCategoryModal
        category={updateCategory}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default AllCategoryTable;
