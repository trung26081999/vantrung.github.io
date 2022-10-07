import { useContext, useEffect, useState } from "react";
import { REMINDER_LIST_KEY } from "../../const";
import { ReminderContext } from "../../context/ReminderContext";
import { compareWithToday, localStorageUtil } from "../../utils";
import AddForm from "../add-form/AddForm";
import ReminderList from "../reminder-list/ReminderList";

import "./style.scss";

function Reminder(props) {
  const { set, get } = localStorageUtil(REMINDER_LIST_KEY, []);
  const [reminderData, setReminderData] = useState([]);
  const { handleAdd } = useContext(ReminderContext);
  const { handleDelete } = useContext(ReminderContext);

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
      handleAdd(newReminderData);
  };

  const handleDeleteReminder = (id) => {
    handleDelete(id)
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
