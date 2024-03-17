"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const AllCategory = ({ categories }) => {
  return (
    <>
      <Table aria-label="Example static collection table">
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

export default AllCategory;
