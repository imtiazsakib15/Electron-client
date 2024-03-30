"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const AllUserTable = ({ users }) => {
  return (
    <>
      <Table aria-label="All product table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ROLE</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No users found."}>
          {users?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="w-min">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUserTable;
