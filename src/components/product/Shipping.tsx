const Shipping = () => {
  const listItem = (title: string, value: string) => {
    return (
      <li className={`flex text-dark-90 border-b border-dark-40`}>
        <span className="block w-[252px] md:w-[320px] font-medium py-2 px-3">
          {title}
        </span>
        <span className="block w-full py-2 px-3">{value}</span>
      </li>
    );
  };
  return (
    <ul className="border border-b-0 border-dark-40">
      {listItem("Shipping Charge", "$20.00")}
      {listItem("Estimated Delivery Time", "3-7 working days")}
      {listItem("Offer", "Free shipping with orders over $250.00")}
    </ul>
  );
};

export default Shipping;
