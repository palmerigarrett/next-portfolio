"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { AppContext } from "@/app/_context/ContextWrapper";
import Link from "next/link";

const Sidebar = () => {
  const {state, dispatch} = useContext(AppContext);
  const [leafOpen, setLeafOpen] = useState({
    professional: false,
    personal: false
  });
  const [canAnimate, setCanAnimate] = useState(false);
  const imageStyle = {
    borderRadius: '50%',
  };

  const handleOpenLeafs = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanAnimate(true);
    const el = e.currentTarget;
    const type = el.getAttribute("data-id") as "professional" | "personal";
    setLeafOpen((state) => {
      return ({
        ...state,
        [type]: !state[type]
      })
    });
  };

  const toggleViewMode = () => {
    const newViewMode = state.viewMode === "dark" ? "light" : "dark";
    dispatch({type: "SET_VIEW_MODE", payload: newViewMode});
  };

  return (
    <nav className={`${styles.sidebar} ${state.viewMode === "dark" ? '' : styles.light}`}>
      <Image
        src="/portfolio_image.jpg"
        alt="Garrett Palmeri Headshot"
        height={200}
        width={200}
        priority={true}
        style={imageStyle}
      />
      <div className={styles.titleContainer}>
        <Link href="/"><h2>Garrett Palmeri</h2></Link>
        <div className={styles.stage}/>
      </div>
      <div className={styles.subtitleContainer}>
        <p>
          Software Engineer @ Wheels Up
        </p>
      </div>
      <ul>
        <li>
          <div onClick={handleOpenLeafs} data-id="professional" className={styles.menuTitle}>
            <SidebarListItem
              href=''
              copy='Professional Experience 💻'
              prefetch={false}
              nodeType="title"
            />
          </div>
          {/* START WORK EXPERIENCE */}
          <div
            className={`
              ${styles.dropdown}
              ${styles.open}
              `}
              // ${leafOpen.professional && canAnimate ? styles.open : styles.closed}
          >
            <SidebarListItem
              href='/professional/wheelsup'
              copy='Wheels Up 🛫'
              prefetch={true}
              nodeType="leaf"
              disabled
            />
            <SidebarListItem
              href='/professional/pin'
              copy='Project Innovate Newark 📍'
              prefetch={true}
              nodeType="leaf"
              disabled
            />
            {/* END WORK EXPERIENCE */}
            </div>
          </li>
        {/* <li>
          <div onClick={handleOpenLeafs} data-id="personal" className={styles.menuTitle}>
            <SidebarListItem
              href='/about'
              copy='More About Me 🙎🏼‍♂️'
              prefetch={true}
              nodeType="topLeaf"
            />
          </div>
        </li> */}
      </ul>
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
    </nav>
  );
};

export default Sidebar;