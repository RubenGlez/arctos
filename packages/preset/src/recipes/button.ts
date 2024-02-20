import { defineSlotRecipe } from "@pandacss/dev";

export const button = defineSlotRecipe({
  staticCss: [{ hasIcon: ["*"], variant: ["*"] }],
  slots: ["root", "stateLayer"],
  className: "button",
  description: "Button styles",
  base: {
    root: {
      appearance: "none",
      display: "inline-flex",
      height: "40px",
      borderRadius: "full",
      cursor: "pointer",
      outline: "none",
      transitionProperty: "background-color, border, box-shadow",
      transitionDuration: "150ms",
      transitionTimingFunction: "linear",
      _disabled: {
        pointerEvents: "none",
      },
    },
    stateLayer: {
      borderRadius: "full",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      height: "100%",
      width: "100%",
      paddingLeft: "24px",
      paddingRight: "24px",
      transitionProperty: "background-color",
      transitionDuration: "150ms",
      transitionTimingFunction: "linear",
    },
  },
  variants: {
    variant: {
      filled: {
        root: {
          color: "onPrimary",
          backgroundColor: "primary",
          _hover: {
            boxShadow: "1",
          },
          _disabled: {
            backgroundColor: "onSurface/12",
            color: "onSurface/38",
          },
        },
        stateLayer: {
          _groupHover: {
            backgroundColor: "onPrimary/8",
          },
          _groupFocus: {
            backgroundColor: "onPrimary/12",
          },
          _groupActive: {
            backgroundColor: "onPrimary/12",
          },
          _groupDisabled: {
            backgroundColor: "onSurface/12",
          },
        },
      },
      outlined: {
        root: {
          color: "primary",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "outline",
          _disabled: {
            color: "onSurface/38",
            borderColor: "onSurface/12",
          },
        },
        stateLayer: {
          _groupHover: {
            backgroundColor: "primary/8",
          },
          _groupFocus: {
            backgroundColor: "primary/12",
          },
          _groupActive: {
            backgroundColor: "primary/12",
          },
        },
      },
      text: {
        root: {
          color: "primary",
          _disabled: {
            color: "onSurface/38",
          },
        },
        stateLayer: {
          _groupHover: {
            backgroundColor: "primary/8",
          },
          _groupFocus: {
            backgroundColor: "primary/12",
          },
          _groupActive: {
            backgroundColor: "primary/12",
          },
        },
      },
      elevated: {
        root: {
          boxShadow: "1",
          color: "primary",
          backgroundColor: "surfaceContainerLow",
          _hover: {
            boxShadow: "2",
          },
          _focus: {
            boxShadow: "1",
          },
          _disabled: {
            color: "onSurface/38",
            boxShadow: "none",
          },
        },
        stateLayer: {
          _groupHover: {
            backgroundColor: "primary/8",
          },
          _groupFocus: {
            backgroundColor: "primary/12",
          },
          _groupActive: {
            backgroundColor: "primary/12",
          },
          _groupDisabled: {
            backgroundColor: "onSurface/12",
          },
        },
      },
      tonal: {
        root: {
          backgroundColor: "secondaryContainer",
          _hover: {
            boxShadow: "1",
          },
          _disabled: {
            color: "onSurface/38",
          },
        },
        stateLayer: {
          _groupHover: {
            backgroundColor: "onSecondaryContainer/8",
          },
          _groupFocus: {
            backgroundColor: "onSecondaryContainer/12",
          },
          _groupActive: {
            backgroundColor: "onSecondaryContainer/12",
          },
          _groupDisabled: {
            backgroundColor: "onSurface/12",
          },
        },
      },
    },
    hasIcon: {
      true: {
        stateLayer: {
          paddingLeft: "16px",
        },
      },
    },
  },
});
