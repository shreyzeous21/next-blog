import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLink/AuthLink";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="fb" width={24} height={24} />
        <Image src="/instagram.png" alt="ig" width={24} height={24} />
        <Image src="/youtube.png" alt="yt" width={24} height={24} />
      </div>
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
};
