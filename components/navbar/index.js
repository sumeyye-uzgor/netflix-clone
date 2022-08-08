import {
  getCredentialsWithMagic,
  logOutWithMagic,
} from "../../lib/magic-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogOut = async () => {
    const out = await logOutWithMagic();
    if (out) {
      router.push("/login");
    } else {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const user = await getCredentialsWithMagic();
      setUserInfo(user);
    };
    getUserInfo();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/netflix.svg"
              width="128px"
              height="34px"
              alt="netflix logo"
            />
          </div>
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
            {userInfo?.email ? (
              <button
                className={styles.usernameBtn}
                onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
              >
                <p className={styles.username}>{userInfo?.email}</p>
                <Image
                  src="/expand_more.svg"
                  width="24px"
                  height="24px"
                  alt="expand more icon"
                />
              </button>
            ) : (
              "Loading..."
            )}
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div onClick={handleLogOut}>
                  {/* <Link href="/login"> */}
                  <a className={styles.linkName}>Sign Out of Netflix</a>
                  {/* </Link> */}
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
