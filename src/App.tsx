import { useState } from "react";
import MainZone from "./components/mainZone";
import SubZoneCard from "./components/subZoneCard";
import Button from "./components/button";
import type { Item } from "../types";

const items = [
  { id: 1, name: "Battery", type: "Source", src: "/9vBattery.png" },
  { id: 2, name: "AC", type: "Load", src: "/AC.png" },
  {
    id: 3,
    name: "Home Battery",
    type: "Source",
    src: "/Home Battery.png",
  },
  { id: 4, name: "Nail", type: "Path", src: "/nail.png" },
  {
    id: 5,
    name: "Refrigerator",
    type: "Load",
    src: "Refrigerator.png",
  },
  { id: 6, name: "Table Fan", type: "Load", src: "/Table Fan.png" },
  {
    id: 7,
    name: "Wall Outlet",
    type: "Source",
    src: "/Wall Outlet.png",
  },
  {
    id: 8,
    name: "Wall Switch",
    type: "Path",
    src: "/Wall Switch.png",
  },
  { id: 9, name: "Wire", type: "Path", src: "/Wire.png" },
];

function App() {
  const [item, setItem] = useState(items);
  const [check, setCheck] = useState(false);
  const [sourceItem, setSourceItem] = useState<Item[]>([]);
  const [loadItem, setLoadItem] = useState<Item[]>([]);
  const [pathItem, setPathItem] = useState<Item[]>([]);

  const handleDrop = (droppedItem: Item) => {
    setItem((prevItems) =>
      prevItems.filter((item) => item.id !== droppedItem.id)
    );
  };

  const onClickHandler = () => {
    setSourceItem([]);
    setLoadItem([]);
    setPathItem([]);
    setItem([...items]);
    setCheck(false);
  };

  return (
    <>
      <div className="grid row-span-2 ">
        <div className="flex flex-col-reverse sm:flex-row sm:w-screen  items-center justify-evenly mt-10 ">
          <div className="grid row-span-3 shadow-md ">
            <SubZoneCard
              label="Source"
              handleDrop={handleDrop}
              droppedItems={sourceItem}
              setDroppedItems={setSourceItem}
              cheak={check}
            />
            <SubZoneCard
              label="Load"
              handleDrop={handleDrop}
              droppedItems={loadItem}
              setDroppedItems={setLoadItem}
              cheak={check}
            />
            <SubZoneCard
              label="Path"
              handleDrop={handleDrop}
              droppedItems={pathItem}
              setDroppedItems={setPathItem}
              cheak={check}
            />
          </div>
          <MainZone items={item} />
        </div>
        <div className="flex items-center justify-center gap-10 mt-5">
          <Button
            onClick={() => {
              if (
                sourceItem.length === 3 &&
                loadItem.length === 3 &&
                pathItem.length === 3
              ) {
                setCheck(true);
              }
            }}
            className="bg-green-500 border-blue-600 "
          >
            Cheak
          </Button>
          <Button
            onClick={onClickHandler}
            className="bg-yellow-400 border-slate-300 "
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
