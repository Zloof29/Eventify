import css from "./Page404.module.css";

export function Page404(): JSX.Element {
  return (
    <div className={css.Container}>
      <p>The page you are looking for doesn't exist.</p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true"
        allow="autoplay"
        title="Page not Found"
      ></iframe>
    </div>
  );
}
