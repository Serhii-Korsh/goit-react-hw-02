import React from "react";
import PropTypes from "prop-types";
import s from "./Options.module.css";

const Options = ({ onFeedback, onReset, totalFeedback }) => (
  <div className={s.box}>
    <button className={s.btn} onClick={() => onFeedback("good")}>
      Good
    </button>
    <button className={s.btn} onClick={() => onFeedback("neutral")}>
      Neutral
    </button>
    <button className={s.btn} onClick={() => onFeedback("bad")}>
      Bad
    </button>
    {totalFeedback > 0 && (
      <button className={s.btn} onClick={onReset}>
        Reset
      </button>
    )}
  </div>
);

Options.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
