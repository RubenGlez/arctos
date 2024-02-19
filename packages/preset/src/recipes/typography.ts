import { defineRecipe } from "@pandacss/dev";

export const typography = defineRecipe({
  staticCss: [{ size: ["*"], color: ["*"], align: ["*"] }],
  className: "typography",
  description: "Typography styles",
  variants: {
    size: {
      displayLarge: {
        textStyle: "displayLarge",
      },
      displayMedium: {
        textStyle: "displayMedium",
      },
      displaySmall: {
        textStyle: "displaySmall",
      },
      headlineLarge: {
        textStyle: "headlineLarge",
      },
      headlineMedium: {
        textStyle: "headlineMedium",
      },
      headlineSmall: {
        textStyle: "headlineSmall",
      },
      bodyLarge: {
        textStyle: "bodyLarge",
      },
      bodyMedium: {
        textStyle: "bodyMedium",
      },
      bodySmall: {
        textStyle: "bodySmall",
      },
      labelLarge: {
        textStyle: "labelLarge",
      },
      labelMedium: {
        textStyle: "labelMedium",
      },
      labelSmall: {
        textStyle: "labelSmall",
      },
      titleLarge: {
        textStyle: "titleLarge",
      },
      titleMedium: {
        textStyle: "titleMedium",
      },
      titleSmall: {
        textStyle: "titleSmall",
      },
    },
    color: {
      current: {
        color: "currentColor",
      },
      primary: {
        color: "primary",
      },
      onPrimary: {
        color: "onPrimary",
      },
      primaryContainer: {
        color: "primaryContainer",
      },
      onPrimaryContainer: {
        color: "onPrimaryContainer",
      },
      secondary: {
        color: "secondary",
      },
      onSecondary: {
        color: "onSecondary",
      },
      secondaryContainer: {
        color: "secondaryContainer",
      },
      onSecondaryContainer: {
        color: "onSecondaryContainer",
      },
      tertiary: {
        color: "tertiary",
      },
      onTertiary: {
        color: "onTertiary",
      },
      tertiaryContainer: {
        color: "tertiaryContainer",
      },
      onTertiaryContainer: {
        color: "onTertiaryContainer",
      },
      error: {
        color: "error",
      },
      errorContainer: {
        color: "errorContainer",
      },
      onError: {
        color: "onError",
      },
      onErrorContainer: {
        color: "onErrorContainer",
      },
      background: {
        color: "background",
      },
      onBackground: {
        color: "onBackground",
      },
      surface: {
        color: "surface",
      },
      onSurface: {
        color: "onSurface",
      },
      surfaceVariant: {
        color: "surfaceVariant",
      },
      onSurfaceVariant: {
        color: "onSurfaceVariant",
      },
      outline: {
        color: "outline",
      },
      inverseOnSurface: {
        color: "inverseOnSurface",
      },
      inverseSurface: {
        color: "inverseSurface",
      },
      inversePrimary: {
        color: "inversePrimary",
      },
      shadow: {
        color: "shadow",
      },
      surfaceTint: {
        color: "surfaceTint",
      },
      outlineVariant: {
        color: "outlineVariant",
      },
      scrim: {
        color: "scrim",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
      justify: {
        textAlign: "justify",
      },
    },
  },
});
