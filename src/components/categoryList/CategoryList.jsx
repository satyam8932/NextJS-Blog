import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          key="style"
        >
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
          key="fashion"
        >
          <Image
            src="/fashion.png"
            alt="fashion"
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
          key="food"
        >
          <Image
            src="/food.png"
            alt="food"
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.style}`}
          key="travel"
        >
          <Image
            src="/travel.png"
            alt="travel"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.style}`}
          key="culture"
        >
          <Image
            src="/culture.png"
            alt="culture"
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.style}`}
          key="coding"
        >
          <Image
            src="/coding.png"
            alt="coding"
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
