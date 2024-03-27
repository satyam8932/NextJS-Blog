import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Link href="https://www.facebook.com/profile.php?id=100011775780828" target="_blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/s_sattu_s/" target="_blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/satyam-singh-068730220/" target="_blank">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCD6LAUcAH1Wddu4od7dC_3w" target="_blank">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
        <Link href="https://www.upwork.com/freelancers/~0140b941ccaa0e490d" target="_blank">
          <Image src="/upwork.png" alt="upwork" width={24} height={24} />
        </Link>
        <Link href="https://github.com/satyam8932/" target="_blank">
          <Image src="/github2.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
          BeatByteBlog
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
