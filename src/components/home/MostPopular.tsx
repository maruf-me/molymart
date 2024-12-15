import PrimaryCard from "../product/PrimaryCard";

const products = [
  {
    img: "/images/product.svg",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/prd/prd2.png",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/product.svg",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "Hot Sale",
  },
  {
    img: "/images/prd/prd2.png",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/product.svg",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/prd/prd2.png",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/product.svg",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
  {
    img: "/images/prd/prd2.png",
    title: "Cool sweater from the greens of new Iceland Cotton",
    top: "New Arrival",
  },
];

const MostPopular = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">
      {products.map((product, index) => (
        <PrimaryCard key={index} product={product} />
      ))}
    </div>
  );
};

export default MostPopular;
