"use server";

export const getAllUser = async (data) => {
  const response = await fetch("http://localhost:5000/api/users", {
    next: { revalidate: 60 },
  });
  const result = await response.json();
  return result;
};

export const saveUserInfo = async (data) => {
  const response = await fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
