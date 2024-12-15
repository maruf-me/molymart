import PrimaryCard from "../product/PrimaryCard";

const GridViewProducts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {Array.from({ length: 16 }).map((_, index) => (
        <PrimaryCard key={index} />
      ))}
    </div>
  );
};

export default GridViewProducts;
