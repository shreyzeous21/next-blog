import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="fb" width={24} height={24} />
        <Image src="/instagram.png" alt="ig" width={24} height={24} />
        <Image src="/youtube.png" alt="yt" width={24} height={24} />
      </div>
      <div className={styles.logo}>shrey | Blog</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
};
