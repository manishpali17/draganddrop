import { useDrop } from "react-dnd";
import type { Item } from "../../types";

export default function SubZoneCard({
  label,
  droppedItems,
  cheak,
  setDroppedItems,
  handleDrop,
}: {
  label: string;
  cheak: boolean;
  handleDrop: (item: Item) => void;
  setDroppedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  droppedItems: Item[];
}) {
  const [, drop] = useDrop(
    () => ({
      accept: "Card",
      canDrop: () => droppedItems.length < 3,
      drop: (item: Item) => {
        if (droppedItems.length < 3) {
          handleDrop(item);
          setDroppedItems((prevItems) => [...prevItems, item]);
        }
      },
    }),
    [droppedItems, setDroppedItems]
  );
  return (
    <>
      <div className="sm:h-36 h-28 p-2 w-80 sm:w-full flex shadow-md">
        <div className="flex items-center justify-center size-full">
          <div className="sm:size-24 size-20 flex items-center justify-center">
            <button className="py-3 m-1 sm:px-8 rounded-sm justify-center flex text-white items-center h-5 w-14 bg-blue-600 ">
              {label}
            </button>
          </div>
          <div ref={drop} className="flex h-20 sm:h-32 w-96 gap-2 shadow-sm ">
            {droppedItems.map((droppedItem) => (
              <div
                key={droppedItem.id}
                className={`flex flex-col items-center justify-center size-20 shadow-md sm:size-32 rounded-lg ${
                  cheak
                    ? droppedItem.type === label
                      ? "border-green-500 border-[4px]  brightness-110"
                      : "border-red-500 border-[4px] animate-pulse brightness-110"
                    : ""
                } `}
              >
                <img
                  src={droppedItem.src}
                  alt={droppedItem.name}
                  className="sm:size-16 size-10"
                />
                <span className="mt-2 text-xs sm:text-lg">
                  {droppedItem.name}
                </span>
              </div>
            ))}
            {droppedItems.length === 0 && (
              <span className="flex w-full items-center justify-center">
                Drag Items Here...
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
