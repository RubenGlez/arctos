import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  staticCss: [{ hasIcon: ["*"], variants: ["*"] }],
  className: "button",
  description: "Button styles",
  base: {
    appearance: "none",
    display: "inline-flex",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "full",
    paddingLeft: "24px",
    paddingRight: "24px",
    cursor: "pointer",
    color: "onPrimary",
    outline: "none",
    transitionProperty: "color, background-color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "linear",
  },
  variants: {
    variant: {
      filled: {
        backgroundColor: "primary",
        _hover: {
          boxShadow: "{shadows.1}",
          backgroundColor: "primary/92",
        },
        _focus: {
          backgroundColor: "primary/88",
        },
        _active: {
          backgroundColor: "primary/88",
        },
        _disabled: {
          backgroundColor: "onSurface/12",
          color: "onSurface/38",
          pointerEvents: "none",
        },
      },
      outlined: {
        border: "1px solid black",
      },
      elevated: {
        boxShadow: "{shadows.1}",
      },
      tonal: {
        backgroundColor: "secondaryContainer",
      },
    },
    hasIcon: {
      true: {
        paddingLeft: "16px",
      },
    },
  },
});
