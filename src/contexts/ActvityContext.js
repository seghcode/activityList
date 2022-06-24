// modified to use reducers
import React, { createContext, useReducer, useEffect } from "react";
import { actvityReducer } from "../reducers/ActivityReducer";

export const ActivityContext = createContext();

const ActivityContextProvider = (props) => {
  // activities data
  const [activities, dispatch] = useReducer(actvityReducer, [], () => {
    const localData = localStorage.getItem("activities");
    return localData ? JSON.parse(localData) : [];
  });

  // storing data in localStorage with the help of useEffect
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  // //   adding new activities
  // const addActivity = (title, author) => {
  //   setactivities([...activities, { title, author, id: uuidv1() }]);
  // };

  // //   removing a book
  // const removeActivity = (id) => {
  //   setactivities(activities.filter((book) => book.id !== id));
  // };

  return (
    <ActivityContext.Provider value={{ activities, dispatch }}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
