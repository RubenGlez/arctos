import pandaPreset from "@pandacss/preset-panda";
import { definePreset } from "@pandacss/dev";
import { tokens } from "./tokens";
import { textStyles } from "./text-styles";
import { semanticTokens } from "./semantic-tokens";
import { globalCss } from "./global-css";
import { recipes } from "./recipes";
import { utilities } from "./utilities";

export const arctosPreset = definePreset({
  presets: [pandaPreset],
  globalCss,
  utilities,
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
      recipes,
    },
  },
});

export default arctosPreset;
