import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image className={styles.logo} src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>BeatByteBlog</h1>
        </div>
        <p className={styles.desc}>
          Stay ahead of the curve with our tech and coding blog, your go-to
          destination for the latest industry trends, insightful tutorials, and
          expert advice. Whether you&apos;re a seasoned developer or just starting
          your journey into the world of technology, our curated content will
          fuel your curiosity and inspire your next breakthrough. Join our
          community of innovators and let&apos;s code the future together.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/linkedin.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/upwork.png" alt="" width={18} height={18} />
          <Image src="/github2.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div> */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/profile.php?id=100011775780828" target="_blank">Facebook</Link>
          <Link href="https://www.instagram.com/s_sattu_s/" target="_blank">Instagram</Link>
          <Link href="https://www.linkedin.com/in/satyam-singh-068730220/" target="_blank">LinkedIn</Link>
          <Link href="https://www.youtube.com/channel/UCD6LAUcAH1Wddu4od7dC_3w" target="_blank">Youtube</Link>
          <Link href="https://www.upwork.com/freelancers/~0140b941ccaa0e490d" target="_blank">Upwork</Link>
          <Link href="https://github.com/satyam8932/" target="_blank">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
