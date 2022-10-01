import { compareWithToday } from "../../utils";
import ReminderListChild from "./ReminderListChild";
import "./style.scss";

function ReminderList(props) {
  const { data, onDeleteReminder } = props;

  return (
    <div className="ReminderList">
      <ReminderListChild />
      {data?.map((item) => {
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
