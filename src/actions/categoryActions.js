"use server";

import { revalidatePath } from "next/cache";

export const saveCategoryInfo = async (data) => {
  const response = await fetch("http://localhost:5000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  revalidatePath("/(dashboard)/dashboard/categories/all", "page");
  return result;
};

export const getAllCategory = async (data) => {
  const response = await fetch("http://localhost:5000/api/categories", {
    next: { revalidate: 60 },
  });
  const result = await response.json();
  return result;
};

export const updateCategoryInfo = async (id, data) => {
  const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  revalidatePath("/(dashboard)/dashboard/categories/all", "page");
  return result;
};

export const deleteCategoryInfo = async (id) => {
  const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  revalidatePath("/(dashboard)/dashboard/categories/all", "page");
  return result;
};
