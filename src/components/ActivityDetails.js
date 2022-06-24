import React, { useContext } from "react";
import { ActivityContext } from "../contexts/ActvityContext";

const ActivityDetails = ({ activity }) => {
  const { dispatch } = useContext(ActivityContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_ACTIVITY', id: activity.id})}>
      <div className="title">{ activity.title }</div>
      <div className="date_time">{ activity.date_time }</div>
    </li>
  );
}

export default ActivityDetails;
