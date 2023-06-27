"use client";
import { useContext } from "react";
import styles from "./CardImageCopy.module.css";
import { AppContext } from "@/app/_context/ContextWrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ICardImageCopy {
  title?: string;
  copy: string;
  image?: {
    src: string;
    alt: string;
  }
  href?: string;
}

const CardImageCopy = ({
  title,
  copy,
  image,
  href
}: ICardImageCopy) => {
  const { state } = useContext(AppContext);
  const router = useRouter();
  return (
    <div className={`${styles.card} ${styles[state.viewMode]}`} onClick={() => href && router.push(href)}>
      <h3>{title}</h3>
      {image
        ? <Image
            src={image.src}
            alt={image.alt}
            height={100}
            width={200}
            style={{objectFit: "contain"}}
          />
        : <div style={{height: "100px", width: "200px"}}/>
      }
      <div className={styles.copyContainer}>
        <p className={styles.copy}>{copy}</p>
      </div>
    </div>
  );
};

export default CardImageCopy;