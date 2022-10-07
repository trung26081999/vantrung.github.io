import { useContext } from "react";
import { ReminderContext } from "../../context/ReminderContext";

function ReminderListChild() {
  // goi context ra bat ky dau trong cacs component con duoc boc boi ReminderContext.Povider
  const context = useContext(ReminderContext);

  console.log(context.listReminder);

  return <div>any</div>;
}

export default ReminderListChild;
