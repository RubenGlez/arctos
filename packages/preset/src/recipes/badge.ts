import { defineRecipe } from "@pandacss/dev";

export const badge = defineRecipe({
  className: "badge",
  description: "Badge styles",
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "error",
    borderRadius: "full",
  },
  variants: {
    size: {
      small: {
        width: "6px",
        height: "6px",
      },
      large: {
        width: "16px",
        height: "16px",
      },
    },
  },
});
