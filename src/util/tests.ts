import { Ableton } from "..";

export const withAbleton = async (callback: (ab: Ableton) => Promise<void>) => {
  const ab = new Ableton();
  ab.on("error", console.error);

  try {
    await callback(ab);
  } finally {
    ab.close();
  }
};
