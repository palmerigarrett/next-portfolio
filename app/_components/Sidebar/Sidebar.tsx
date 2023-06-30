"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { AppContext } from "@/app/_context/ContextWrapper";
import Link from "next/link";
import { useViewport } from "@/app/_hooks";
import GoToResumeButton from "../FindOutMoreButton/GoToResumeButton";
import ViewModeToggle from "./ViewModeToggle";

const Sidebar = () => {
  const {state} = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [leafOpen, setLeafOpen] = useState({
    professional: false,
    personal: false
  });
  const [canAnimate, setCanAnimate] = useState(false);
  const { width } = useViewport();

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

  const handleMenuClick = () => {
    // below controls the animation of the menu with JS
    // normally keeyframes should be used, but this particular
    // animation is not supported by safari using keyframes
    const menuMobile = document.getElementById(
        'menu-mobile',
    );
    if (openMenu && menuMobile) {
        menuMobile.style.transform =
            'translateY(-150%)';
        menuMobile.style.transition =
            'all 0.6s ease-in-out';
    } else if (menuMobile) {
        menuMobile.style.transform = 'translateY(0)';
        menuMobile.style.transition =
            'all 0.6s ease-in-out';
    }
    setOpenMenu(!openMenu);
};

  const imageStyle = {
    borderRadius: '50%',
    height: width > 600 ? 200 : 30,
    width: width > 600 ? 200 : 30,
  };

  return (
    <nav className={`${styles.sidebar} ${state.viewMode === "dark" ? '' : styles.light}`}>
      <Image
        src="/portfolio.jpg"
        alt="Garrett Palmeri Headshot"
        height={imageStyle.height}
        width={imageStyle.width}
        priority={true}
        style={imageStyle}
      />
      <div className={styles.titleContainer}>
        <Link href="/">
          {width > 600
            ? <h2>Garrett Palmeri</h2>
            : <h3>Garrett Palmeri</h3>
          }
        </Link>
        {width > 600 && <div className={styles.stage}/>}
      </div>
      {width > 600
        ? (
          <>
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
            <ViewModeToggle/>
          </>
        )
        : (
          <>
            <div
              onClick={handleMenuClick}
              className={`
                ${styles.displayBlock}
                ${styles.cursorPointer}
                ${styles.overflowHidden}
                ${styles.top10}
                ${styles.right24}
                ${styles.zIndex11000}
                ${styles.textAlignCenter}
                ${styles.padding}
                ${styles.backgroundTransparent}
                ${styles.borderRadius4}
                ${styles.transition}
                ${styles.width40}
                ${styles.height40}
                ${styles.boxShadow}
                ${styles[state.viewMode]}
              `}
            >
              <div className={`${styles.menuBox} ${styles[state.viewMode]}`}>
                <div className={`${openMenu ? styles.menuInnerOpen1 : styles.menuInnerClosed} ${styles[state.viewMode]}`}/>
                <div className={`${openMenu && styles.menuInnerOpen2} ${styles[state.viewMode]}`}/>
              </div>
            </div>
            <div id="menu-mobile" className={`${styles.menuMobile} ${styles[state.viewMode]}`}>
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
                      onClick={handleMenuClick}
                    />
                    <SidebarListItem
                      href='/professional/pin'
                      copy='Project Innovate Newark 📍'
                      prefetch={true}
                      nodeType="leaf"
                      onClick={handleMenuClick}
                    />
                    {/* END WORK EXPERIENCE */}
                    <GoToResumeButton/>
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
                <ViewModeToggle/>
            </div>
          </>
        )
      }
    </nav>
  );
};

export default Sidebar;