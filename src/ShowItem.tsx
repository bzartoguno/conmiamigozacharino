import { FC } from "react";
import { Item } from "./types";

type ShowItemProps = {
  item: Item;
  tribe: string;
};

export const ShowItem: FC<ShowItemProps> = ({ item, tribe }) => {
  if (!item) {
    return <tr><td>{tribe} is angry at you and don't want to trade with you!</td></tr>
  }

  const { description, name, price } = item;
  return (
    <>
      <tr>
        <td>{tribe} wants to trade </td>
        <td>{name}</td>
        <td>for {price} Gold</td>
        <td>{description}</td>
      </tr>
    </>
  );
};
