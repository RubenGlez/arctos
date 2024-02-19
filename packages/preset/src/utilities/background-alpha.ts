import type { UtilityConfig } from "@pandacss/types";
import { colorMix } from "@/lib/color-mix";

export const backgroundAlpha: UtilityConfig = {
  backgroundAlpha: {
    property: "backgroundColor",
    className: "backgroundAlpha",
    values: { type: "string" },
    transform: (...args) => {
      const { value, color } = colorMix(...args);

      return {
        "--arctos-bga": value,
        backgroundColor: `var(--arctos-bga, ${color})`,
      };
    },
  },
};
