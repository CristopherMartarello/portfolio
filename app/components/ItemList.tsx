import { ReactElement } from "react";

interface ItemListProps {
  icon: ReactElement;
  text: string;
}

const ItemList = ({ icon, text }: ItemListProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div>{icon}</div>
      <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-zinc-600 dark:text-white font-semibold">
        {text}
      </p>
    </div>
  );
};

export default ItemList;
