import { useState } from "react";
import "./style.scss";
function Button() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const reduce = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="button">
      <div className="reset-button">React Clicker</div>
      <div className="form-button">
        <div className="top">{count}</div>
        <div className="bottom">
          <button onClick={increase} className="increaseNumber">
            +
          </button>
          <button onClick={reset} className="reset">
            <i class="bx bx-rotate-left"></i>
          </button>
          <button onClick={reduce} className="reduceNumber">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
