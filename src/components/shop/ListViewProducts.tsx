import PrimaryCardListView from "../product/PrimaryCardListView";

const ListViewProducts = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 16 }).map((_, index) => (
        <PrimaryCardListView key={index} />
      ))}
    </div>
  );
};

export default ListViewProducts;
