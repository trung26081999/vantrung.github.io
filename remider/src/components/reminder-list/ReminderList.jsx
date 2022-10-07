import { compareWithToday } from "../../utils";
import "./style.scss";
import { useContext } from 'react';
import { ReminderContext } from './../../context/ReminderContext';
import { usePagination } from "./hook";
import { ITEM_PER_PAGE } from "../../const";
import Pagination from '../Pagination/Pagination';


function ReminderList(props) {
  const {  onDeleteReminder } = props;
  const {listReminder}=useContext(ReminderContext);
  const { jumpPage, dataPerPage, currentPage, maxPage } = usePagination(
    listReminder,
    ITEM_PER_PAGE
  );

  return (
    <div className="ReminderList">
   
      {dataPerPage?.map((item) => {
        const isEqualToday = compareWithToday(item.date);

        return (
          <div
            key={item.id}
            className={`reminder-item ${isEqualToday ? "active" : ""}`}
          >
            <div className="reminder-item-content">
              <div>Ngày: {item?.date}</div>
              <div>Tiêu đề: {item?.title}</div>
            </div>
            <div
              onClick={() => onDeleteReminder(item?.id)}
              className="reminder-item-delete-button"
            >
              x
            </div>
          </div>
        );
      })}
      <Pagination
      currentPage={currentPage}
      jumpPage={jumpPage}
      maxPage={maxPage}
      />
      
    </div>
  );
}

export default ReminderList;
