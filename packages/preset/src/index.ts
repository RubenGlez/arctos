import pandaPreset from "@pandacss/preset-panda";
import { definePreset } from "@pandacss/dev";
import { tokens } from "./tokens";
import { textStyles } from "./text-styles";
import { semanticTokens } from "./semantic-tokens";
import { globalCss } from "./global-css";

export default definePreset({
  presets: [pandaPreset],
  globalCss,
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },
});
