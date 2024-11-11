import { useSelector } from "react-redux";
import css from "./TotalEvents.module.css";
import { AppState } from "../../../Redux/store";

export function TotalEvents(): JSX.Element {
  // Registering to the global state and getting product count:
  const count = useSelector<AppState, number>(
    (store) => store.events?.length || 0
  );

  return (
    <div className={css.Container}>
      {count > 0 && <span className={css.Border}>Total Products: {count}</span>}
    </div>
  );
}
