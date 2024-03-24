"use client";

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

const AllCategoryTable = ({ products }) => {
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
                {/* <Image
                  src={product.image}
                  alt={`${product.name} Image`}
                  width={100}
                  height={100}
                /> */}
                IMAGE
              </TableCell>
              <TableCell className="w-min">{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.oldPrice}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.availability}</TableCell>
              <TableCell className="flex gap-4 text-xl">
                <CiEdit title="UPDATE" className="cursor-pointer" />
                <MdDelete
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

export default AllCategoryTable;
