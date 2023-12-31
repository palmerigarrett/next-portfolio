"use client";
import Link from 'next/link';
import styles from "./SidebarListItem.module.css";

interface ISideBarListItem {
  href: string;
  copy: string;
  nodeType: "topLeaf" | "leaf" | "title";
  prefetch?: boolean;
  disabled?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const SidebarListItem = ({href, copy, prefetch=false, nodeType, onClick, children}: ISideBarListItem) => {
  /**
   * When clicked, it will taker the user to the different parts of the portfolio
   */
  return (
    <div
      className={`
        ${styles.linkContainer}
        ${nodeType === "leaf" ? styles.leaf : styles.dropdown}
      `}
      onClick={() => onClick && onClick()}
    >
      {nodeType === "leaf" || nodeType === "topLeaf"
        ?
          <Link href={href} prefetch={prefetch}>{copy}</Link>
        : (
          <>
            <p>{copy}</p>
          </>
        )
      }
    </div>
  );
}

export default SidebarListItem;