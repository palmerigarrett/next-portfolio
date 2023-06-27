"use client";
import { useContext } from "react";
import styles from "./MainPage.module.css";
import { AppContext } from "@/app/_context/ContextWrapper";

interface IMainPage {
  children: React.ReactNode | React.ReactNode[];
}

const MainPage = ({
  children
}: IMainPage) => {
  const { state } = useContext(AppContext);
  return (
    <div className={`${styles.container} ${styles[state.viewMode]}`}>
      <div className={styles.innerContainer}>
        {children}
      </div>
    </div>
  )
}

export default MainPage;