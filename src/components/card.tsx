import { useDrag } from "react-dnd";
import type { Item } from "../../types";

export default function Card({ item }: { item: Item }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "Card",
      item: item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [item]
  );

  return (
    <>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
        className="flex flex-col items-center justify-center shadow-lg p-2 size-24 sm:size-32"
      >
        <img src={item.src} alt={item.name} className="sm:size-14 size-10" />
        <span className="mt-2 text-xs sm:text-lg">{item.name}</span>
      </div>
    </>
  );
}
