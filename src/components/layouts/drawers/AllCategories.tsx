import { ChevronRight } from "lucide-react";

const categories = [
  "Electronic Devices",
  "Mobile Phones",
  "Fashion",
  "Health & Beauty",
  "Living & Furnitures",
  "Children & Toys",
  "Footwear",
  "Sports & Outdoor",
  "See all categories",
];

const AllCategories = () => {
  const lastEl = (idx: number) => idx === categories.length - 1;

  return (
    <ul>
      {categories.map((category, index) => (
        <li
          key={index}
          className={`px-3 py-3 ${!lastEl(index) && "border-b border-dark-40"}`}
        >
          <a href="#" className="text-dark-100 flex items-center gap3">
            {category} <ChevronRight size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default AllCategories;
