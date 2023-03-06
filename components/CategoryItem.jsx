const CategoryItem = ({ title }) => {
  console.log(title);
  return (
    <li
      className="bg-gray-200 p-2 rounded-md text-semi-purple hover:bg-gray-400 hover:text-white transition duration-300

    "
    >
      {title}
    </li>
  );
};

export default CategoryItem;
