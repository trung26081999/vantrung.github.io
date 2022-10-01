import { useEffect, useState } from "react";
import { REMINDER_LIST_KEY } from "../../const";
import { compareWithToday, localStorageUtil } from "../../utils";
import AddForm from "../add-form/AddForm";
import ReminderList from "../reminder-list/ReminderList";

import "./style.scss";

function Reminder(props) {
  const { set, get } = localStorageUtil(REMINDER_LIST_KEY, []);
  const [reminderData, setReminderData] = useState([]);

  // componentDidMount
  useEffect(() => {
    const localStorageListData = JSON.parse(get());
    setReminderData(localStorageListData);

    localStorageListData.map((item) => {
      if (compareWithToday(item.date)) {
        alert(item.title);
      }
    });
  }, []);

  const handleAddNewReminder = (newReminderData) => {
    const newList = [newReminderData, ...reminderData];

    setReminderData(newList);
    set(newList);
  };

  const handleDeleteReminder = (id) => {
    const newList = reminderData.filter((item) => item.id !== id);
    setReminderData(newList);
    set(newList);
  };

  return (
    <div className="Reminder">
      <h1 className="reminder-header">Nhắc nhở ngày quan trọng của bạn</h1>
      <div className="reminder-body">
        <AddForm onAddNewReminder={handleAddNewReminder} />
        <ReminderList
          data={reminderData}
          onDeleteReminder={handleDeleteReminder}
        />
      </div>
    </div>
  );
}

export default Reminder;
