import { localStorageUtil } from "../ultil";
import "./Sidebar.scss";
import { localstorageKey } from "../ultil/index";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Sidebar() {
  const { set, get } = localStorageUtil(localstorageKey.todoItems, []);
  const [content, setContent] = useState();
  const [alertDate, setAlertDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      content,
      alertDate,
      id: uuidv4(),
    };
    const oldList = JSON.parse(get());
    set([...oldList, newTask]);
    if (!validate()) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const content = document.getElementById("content").value;
    console.log(content);
    const alertDate = document.getElementById("date").value;
    console.log(alertDate);
    let valid=true
    if (content === "") {
      alert("Vui long nhap noi dung can nhap");
      valid = false;
    }
    if (alertDate === "") {
      alert("Vui long nhap ngay");
      valid = false;
    }
    return valid;
  };

  //

  return (
    <form className="side-bar">
      <div className="side-bar-content">
        <div className="form-content">
        <label htmlFor="">
          Nội dung:
          <input
            type="text"
            value={content}
            id="content"
            placeholder="mời nhập nội dung của ngày"
            //   onClick={(e)=>{}}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </label>
        </div>
        <div className="form-content">
        <label htmlFor="">
          Ngày nhắc:
          <input
            id="date"
            value={alertDate}
            type="date"
            className="date"
            //   onClick={(e)=>{}}
            onChange={(e) => {
              setAlertDate(e.target.value);
            }}
          />
        </label>
        <button className="saveDate" type="submit" onClick={handleSubmit}>
          Lưu ngày
        </button>
        </div>
      </div>
    </form>
  );
}

export default Sidebar;
