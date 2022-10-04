import { compareWithToday } from "../../utils";
import ReminderListChild from "./ReminderListChild";
import "./style.scss";
import { useContext } from 'react';
import { ReminderContext } from './../../context/ReminderContext';

function ReminderList(props) {
  const {  onDeleteReminder } = props;
  const {listReminder}=useContext(ReminderContext);

  return (
    <div className="ReminderList">
      <ReminderListChild />
      {listReminder?.map((item) => {
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
    </div>
  );
}

export default ReminderList;
