import { FC } from "react";
import { Tribe } from "./types";

type ShowItemProps = {
  tribe: Tribe;
  itemIndex: number;
  styles: any; 
};

export const ShowItem: FC<ShowItemProps> = ({ styles, tribe, itemIndex }) => {
  const item = tribe.items[itemIndex];

  const rageMode = Math.random() * 100;
  if (rageMode <= tribe.percentAngry) {
    const insultIndex = Math.floor(Math.random() * tribe.insults.length);
    return <div className={styles.textBox}>{tribe.insults[insultIndex]}</div>;
  }

  const { description, name, price } = item;

  const priceVariability =
    ((Math.random() * tribe.priceVariability) / 100) * price;
  const upOrDown = Math.floor(Math.random() * 2);

  const finalPrice =
    upOrDown === 0 ? price - Math.floor(priceVariability) : price + Math.floor(priceVariability);

  return (
    <>
      <div className={styles.textBox}>
        <div>
          {tribe.name} wants to trade {name} for {finalPrice.toLocaleString()} Gold
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};