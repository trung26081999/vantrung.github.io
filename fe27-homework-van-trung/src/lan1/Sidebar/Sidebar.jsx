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
    set([ ...oldList,newTask]);
  };

  return (
    <form className="side-bar">
      <div className="side-bar-content">
        <label htmlFor="">
          Nội dung:
          <input
            type="text"
            placeholder="mời nhập nội dung của ngày"
            //   onClick={(e)=>{}}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Ngày nhắc:
          <input
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
    </form>
  );
}

export default Sidebar;
