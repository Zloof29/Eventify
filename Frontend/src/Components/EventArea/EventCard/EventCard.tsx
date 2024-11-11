import { EventModel } from "../../../Models/EventModel";
import css from "./EventCard.module.css";

type ProductCardProps = {
  product: EventModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
  return <div className={css.Container}></div>;
}
