import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const router = useRouter();
  const isEmail = (input) =>
    input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      if (email === "summeyyeoz@gmail.com") {
        router.push("/");
      } else {
        setUserMsg("Something went wrong logging in.");
      }
    } else {
      setUserMsg("Enter a valid email address");
    }
  };
  useEffect(() => {
    isEmail(email) && setUserMsg("");
  }, [email]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {userMsg?.length > 0 && <p className={styles.userMsg}>{userMsg}</p>}
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
