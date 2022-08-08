import { Magic } from "magic-sdk";
const createMagic = () =>
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY);

export const magic = createMagic();

export const signInWithMagic = async (email) => {
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

export const getCredentialsWithMagic = async () => {
  try {
    return await magic.user.getMetadata();
  } catch (error) {
    console.error("Oh no! Something went wrong", error);
  }
};

export const logOutWithMagic = async () => {
  try {
    return await magic.user.logout();
  } catch (error) {
    console.error("Oh no! Something went wrong", error);
  }
};
