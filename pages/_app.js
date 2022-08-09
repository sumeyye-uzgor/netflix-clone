import "../styles/globals.css";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { getCredentialsWithMagic } from "../lib/magic-client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  useEffect(() => {
    const redirectWithUserInfo = async () => {
      setIsLoading(true);
      const user = await getCredentialsWithMagic();
      user ? router.push("/") : router.push("/login");
    };
    redirectWithUserInfo();
  }, []);
  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
