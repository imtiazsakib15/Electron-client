"use client";

import { deleteProductInfo } from "@/actions/productActions";
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
import Swal from "sweetalert2";

const AllProductTable = ({ products }) => {
  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteProductInfo(id);

        if (result?._id) toast.success("Product deleted successfully!");
      }
    });
  };

  return (
    <>
      <Table aria-label="All product table">
        <TableHeader>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>OLD PRICE</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
          <TableColumn>AVAILABILITY</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No products found."}>
          {products?.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <Image
                  src={product.image}
                  alt={`${product.name} Image`}
                  width={100}
                  height={100}
                  className="w-28 h-24 rounded-lg"
                />
              </TableCell>
              <TableCell className="w-min">{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.oldPrice}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.availability}</TableCell>
              <TableCell className="flex items-center h-28 gap-4 text-xl">
                <CiEdit title="UPDATE" className="cursor-pointer" />
                <MdDelete
                  onClick={() => handleDeleteProduct(product._id)}
                  title="DELETE"
                  className="text-red-500 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllProductTable;
