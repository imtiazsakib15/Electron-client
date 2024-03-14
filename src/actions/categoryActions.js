"use server";

export const saveCategoryInfo = async (data) => {
  const response = await fetch("http://localhost:5000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const getAllCategory = async (data) => {
  const response = await fetch("http://localhost:5000/api/categories");
  const result = await response.json();
  return result;
};
