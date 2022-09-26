import "./MainList.scss";
import { localstorageKey, localStorageUtil } from "../ultil/index";
import { useState } from "react";
import { useEffect } from "react";
import Main from "../Main/Main";
const MainList = (props) => {
  const { get } = localStorageUtil(localstorageKey.todoItems, []);
  const [listData, setlistData] = useState([]);
  useEffect(() => {
    const list = JSON.parse(get());
    setlistData(list);
  }, []);
  return (
    <div className="main-list">
      {listData.map((item, index) => {
        return (
          <Main
            key={index}
            content={item.content}
            alertDate={item.alertDate}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default MainList;
