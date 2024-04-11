import Card from "./card";
import type { Item } from "../../types";

export default function MainZone({ items }: { items: Item[] }) {
  return (
    <>
      <div className="shadow-lg">
        <div
          className={`grid grid-cols-3 min-w-80 min-h-80 sm:min-h-96 sm:min-w-96 gap-3 grid-rows-3 ${
            items.length !== 0 ? "sm:m-3" : "sm:m-6"
          }`}
        >
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
