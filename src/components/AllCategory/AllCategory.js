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
const AllCategory = ({ categories }) => {
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
        <TableBody>
          {categories?.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                {/* <Image src={category.image} alt={`${category.name} Image`} /> */}
                IMAGE
              </TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell className="flex gap-4 text-xl">
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

export default AllCategory;
