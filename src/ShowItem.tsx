import { FC } from "react";
import { Item } from "./types";

type ShowItemProps = {
  item: Item;
};

export const ShowItem: FC<ShowItemProps> = ({ item }) => {
  const { description, name, price } = item;
  return (
    <>
      <tr>
        <td>The first seller</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
      </tr>
    </>
  );
};
