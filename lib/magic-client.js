import { Magic } from "magic-sdk";
const createMagic = () =>
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY);
const magicClient = async (email) => {
  const magic = createMagic();
  try {
    const token = await magic.auth.loginWithMagicLink({
      email,
      showUI: true,
      redirectURI: process.env.NEXT_PUBLIC_REDIRECT_URL,
    });
    return token;
  } catch (error) {
    console.error("Oh no! Something went wrong", error);
    // Handle errors if required!
  }
};

export default magicClient;
