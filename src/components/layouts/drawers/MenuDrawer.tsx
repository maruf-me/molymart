import { useCommonStore } from "@/stores/commonStore";
import { ChevronRight } from "lucide-react";

const menuList = [
  {
    title: "Demo",
    children: [],
  },
  {
    title: "Shop",
  },
  {
    title: "Product",
  },
  {
    title: "Blog",
  },
  {
    title: "Pages",
    children: [],
  },
  {
    title: "Compare",
  },
  {
    title: "Wishlist",
  },
];

const MenuDrawer = () => {
  const lastEl = (idx: number) => idx === menuList.length - 1;
  const setDrawer = useCommonStore((state) => state.setGlobalDrawer);

  return (
    <ul>
      <li
        onClick={() => setDrawer({ open: true, header: "All Categories" })}
        className={`px-3 py-3 border-b border-dark-40`}
      >
        <a href="#" className="text-dark-100 flex items-center gap-2">
          All Categories <ChevronRight size={18} />
        </a>
      </li>

      {menuList.map((menu, index) =>
        menu.children ? (
          <li
            key={index}
            className={`px-3 py-3 ${
              !lastEl(index) && "border-b border-dark-40"
            }`}
          >
            <a href="#" className="text-dark-100 flex items-center gap-2">
              {menu.title} <ChevronRight size={18} />
            </a>
            <ul>
              {menu.children.map((subMenu, index) => (
                <li
                  key={index}
                  className={`px-3 py-3 ${
                    !lastEl(index) && "border-b border-dark-40"
                  }`}
                >
                  <a href="#" className="text-black">
                    {subMenu}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            key={index}
            className={`px-3 py-3 ${
              !lastEl(index) && "border-b border-dark-40"
            }`}
          >
            <a href="#" className="text-black">
              {menu.title}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default MenuDrawer;
