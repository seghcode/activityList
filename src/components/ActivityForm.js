import React, { useContext, useState } from "react";
import { ActivityContext } from "../contexts/ActvityContext";

const ActivityForm = () => {
  const { dispatch } = useContext(ActivityContext);
  const [title, setTitle] = useState('');
  const [date_time, setDate_time] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_ACTIVITY', activity: {
        title, date_time
    }});
    setTitle("");
    setDate_time("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        // placeholder="Add Date/Time"
        value={date_time}
        onChange={(e) => setDate_time(e.target.value)}
        required
      />
      <input type="submit" value="Add Activity" />
    </form>
  );
};

export default ActivityForm;
