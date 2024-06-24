import style from "./Calculator.module.css";
import { Country } from "country-state-city";
import Selector from "../Selector";

function Calculator() {
  let countryData = Country.getAllCountries();
  return (
    <div className={style.calc_body}>
      <form action="">
        <Selector
          title="Where does your hire live?"
          selectName="country"
          selectID="countryName"
        >
          {countryData.map((country, id) => (
            <option value={country.isoCode} key={id}>
              {country.flag}
              {country.name}
            </option>
          ))}
        </Selector>
        <Selector
          title="Gross Anual Salary"
          selectName="country"
          selectID="countryCurrency"
        >
          {countryData.map((country, id) => (
            <option value={country.isoCode} key={id}>
              {country.flag}
              {country.currency}
            </option>
          ))}
        </Selector>
        <input type="submit" value="Calculate Costs" />
      </form>
    </div>
  );
}

export default Calculator;
