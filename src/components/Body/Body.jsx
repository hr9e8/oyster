import style from "./Body.module.css";
import Calculator from "../Calculator";

function Body() {
  return (
    <div className={style.calc_container}>
      <div className={style.calc_heading}>
        <p className={style.calc_subheading}>EMPLOYMENT COST CALCULATOR</p>
        <h1>Calculate the total cost of your next hire</h1>
        <p>Work out the cost of employment in any country instantly</p>
      </div>
      <Calculator />
    </div>
  );
}

export default Body;
