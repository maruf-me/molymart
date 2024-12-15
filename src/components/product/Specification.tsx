const Specification = () => {
  const listItem = (title: string, value: string) => {
    return (
      <li className={`flex text-dark-90 border-b border-dark-40`}>
        <span className="bg-dark-20 block w-[252px] font-medium border-r border-dark-40 py-2 px-3">
          {title}
        </span>
        <span className="block w-full py-2 px-3">{value}</span>
      </li>
    );
  };
  return (
    <ul className="border border-b-0 border-dark-40">
      {listItem("Brand", "Wolves Den")}
      {listItem("Materials", "Cotton")}
      {listItem("Gender", "Female")}
      {listItem(
        "Details",
        "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment."
      )}
      {listItem("Dimensions", "574 x 56.44 x 23")}
      {listItem("Washing", "Tonal stitching: 98% cotton, 2% elastance.")}
      {listItem("Warranty", "3 months official warranty")}
    </ul>
  );
};

export default Specification;
