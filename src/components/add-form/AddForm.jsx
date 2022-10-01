import { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { isInPastDate } from "../../utils";

function AddForm(props) {
  const { onAddNewReminder } = props;

  const [data, setData] = useState({
    title: "",
    date: "",
  });
  const [errors, setErrors] = useState([]);

  const validateData = () => {
    if (errors === undefined) return;

    let _errors = new Set(errors);

    if (data.title === "") {
      _errors = _errors.add("nhap tieu de");
    }

    if (data.title) {
      _errors.delete("nhap tieu de");
    }

    if (data.date === "") {
      _errors = _errors.add("nhap ngay");
    }

    if (data.date !== "") {
      _errors.delete("nhap ngay");
    }

    console.log(_errors);

    setErrors(Array.from(_errors));
  };

  const handleSubmit = (e) => {
    validateData();
    if (errors.size > 0) return;

    e.preventDefault();
    onAddNewReminder({ id: uuidv4(), ...data });
  };

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  // 2022-09-30
  var today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className="AddForm">
      <div className="row row-one">
        <div className="label">Nội dung</div>
        <input
          onChange={(e) => {
            setData({
              ...data,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div className="row row-two">
        <div className="label">Ngày nhắc</div>
        <div className="row -two-input">
          <input
            // 2022-09-30
            min={today}
            type={"date"}
            onChange={(e) => {
              setData({
                ...data,
                date: e.target.value,
              });
            }}
          />
          <button onClick={handleSubmit}>Lưu ngày</button>
        </div>
      </div>
      <div className="validation-message">
        {console.log(Array.from(errors))}
        {Array.from(errors)?.map((item) => {
          return (
            <div key={item} className="message">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddForm;
