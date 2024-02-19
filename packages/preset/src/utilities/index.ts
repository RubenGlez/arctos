import type { Config } from "@pandacss/types";
import { backgroundAlpha } from "./background-alpha";

export const utilities: Config["utilities"] = {
  extend: {
    ...backgroundAlpha,
  },
};
