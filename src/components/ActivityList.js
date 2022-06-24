import React, { useContext } from "react";
import { ActivityContext } from "../contexts/ActvityContext";
import ActivityDetails from "./ActivityDetails";

const  ActivityList = () => {
  const { activities } = useContext(ActivityContext);
  return activities.length ? (
    <div className="activities-list">
      <ul>
        { activities.map(activity => {
          return (<ActivityDetails activity={activity} key={activity.id} />);
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Activities To Perform. Hello free time :)</div>
  );
}

export default ActivityList;
