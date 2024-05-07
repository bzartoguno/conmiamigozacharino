import { FC } from "react";
import { Item } from "./types";

type ShowItemProps = {
  item: Item;
  tribe: string;
};

export const ShowItem: FC<ShowItemProps> = ({ item, tribe }) => {
  if (!item) {
    return (
      <div className="text-box">
        {tribe} is angry at you and don't want to trade with you!
      </div>
    );
  }
  const { description, name, price } = item;
  return (
    <>
      <div className="text-box">
        <div>
          {tribe} wants to trade {name} for {price} Gold
        </div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};
