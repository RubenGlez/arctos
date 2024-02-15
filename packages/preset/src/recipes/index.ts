import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      funky: { bg: "red.200", color: "white" },
      edgy: { border: "1px solid {colors.red.500}" },
    },
  },
  defaultVariants: {
    visual: "funky",
  },
});
