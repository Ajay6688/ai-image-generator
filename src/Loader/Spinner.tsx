import classes from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes["spinner"]}>
      </div>
    </div>
  );
}