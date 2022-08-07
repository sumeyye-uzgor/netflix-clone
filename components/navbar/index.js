import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { useState } from "react";

const Navbar = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>Netflix</div>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem2}>
            <Link href="/my-list">My List</Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
            >
              <p className={styles.username}>{username}</p>
              {/* Expand more iconn */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign Out of Netflix</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
