import { fortunes } from "@/data/fortunes";

export const getFortune = () => {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
};
