import logo from "./logo.svg";
import "./App.css";
import Reminder from "./components/reminder/Reminder";
import { ReminderContext } from "./context/ReminderContext";
import { compareWithToday, localStorageUtil } from "./utils";
import { useEffect, useState } from "react";
import { REMINDER_LIST_KEY } from "./const";

function App() {
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
    const reminderData = JSON.parse(get());
    const newList = [newReminderData, ...reminderData];

    setReminderData(newList);
    set(newList);
  };

  const handleDeleteReminder = (id) => {
    const reminderData = JSON.parse(get());
    const newList = reminderData.filter((item) => item.id !== id);
    setReminderData(newList);
    set(newList);
  };

  return (
    <div className="App">
      <ReminderContext.Provider
        value={{
          listReminder: reminderData,
          handleAdd: (newReminderData) => handleAddNewReminder(newReminderData),
          handleDelete: (id) => handleDeleteReminder(id),
        }}
      >
        <Reminder />
      </ReminderContext.Provider>
    </div>
  );
}

export default App;
