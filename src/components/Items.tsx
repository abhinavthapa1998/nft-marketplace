import ItemCard from "./ItemCard";
import Item1 from "../assets/images/item1.png";
import Item2 from "../assets/images/item2.png";
import Item3 from "../assets/images/item3.png";
import Item4 from "../assets/images/item4.png";

function Items() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 grid-flow-row pb-20">
      <ItemCard display={Item1} title={"Greek"} />
      <ItemCard display={Item2} title={"Greek"} />
      <ItemCard display={Item3} title={"Greek"} />
      <ItemCard display={Item4} title={"Greek"} />
    </div>
  );
}

export default Items;
