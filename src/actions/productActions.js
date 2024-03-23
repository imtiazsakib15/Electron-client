"use server";

import { revalidatePath } from "next/cache";

export const saveProductInfo = async (data) => {
  const response = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  revalidatePath("/(dashboard)/dashboard/products/all", "page");
  return result;
};

export const getAllProduct = async (data) => {
  const response = await fetch("http://localhost:5000/api/products", {
    next: { revalidate: 60 },
  });
  const result = await response.json();
  return result;
};
