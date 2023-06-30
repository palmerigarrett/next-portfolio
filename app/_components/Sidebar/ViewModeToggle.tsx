"use client";
import { useContext } from "react";
import { AppContext } from "@/app/_context/ContextWrapper";
import styles from "./Sidebar.module.css";


const ViewModeToggle = () => {
  const {state, dispatch} = useContext(AppContext);

  const toggleViewMode = () => {
    const newViewMode = state.viewMode === "dark" ? "light" : "dark";
    dispatch({type: "SET_VIEW_MODE", payload: newViewMode});
  };

  return (
    <div className={`${styles.switchToggle} ${state.viewMode === "light" ? styles.on : styles.off}`} onClick={toggleViewMode}>
      <div className={styles.toggleButton}/>
      {state.viewMode === "light"
        ? (
          <span className={`${styles.switchLabel}`}>
            Light Mode Enabled
          </span>
        ) : (
          <span className={`${styles.switchLabel}`}>
            Dark Mode Enabled
          </span>
        ) 
      }
    </div>
  );
}

export default ViewModeToggle;