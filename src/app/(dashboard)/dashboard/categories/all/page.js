import { getAllCategory } from "@/actions/categoryActions";

const AllCategory = async () => {
  const categories = await getAllCategory();
  console.log(categories);

  return <div></div>;
};

export default AllCategory;
