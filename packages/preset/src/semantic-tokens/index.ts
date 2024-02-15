import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      value: {
        base: "{colors.palette.primary.40}",
        _dark: "{colors.palette.primary.80}",
      },
    },
    onPrimary: {
      value: {
        base: "{colors.palette.white}",
        _dark: "{colors.palette.primary.20}",
      },
    },
    primaryContainer: {
      value: {
        base: "{colors.palette.primary.90}",
        _dark: "{colors.palette.primary.30}",
      },
    },
    onPrimaryContainer: {
      value: {
        base: "{colors.palette.primary.10}",
        _dark: "{colors.palette.primary.90}",
      },
    },
    secondary: {
      value: {
        base: "{colors.palette.secondary.40}",
        _dark: "{colors.palette.secondary.80}",
      },
    },
    onSecondary: {
      value: {
        base: "{colors.palette.white}",
        _dark: "{colors.palette.secondary.20}",
      },
    },
    secondaryContainer: {
      value: {
        base: "{colors.palette.secondary.90}",
        _dark: "{colors.palette.secondary.30}",
      },
    },
    onSecondaryContainer: {
      value: {
        base: "{colors.palette.secondary.10}",
        _dark: "{colors.palette.secondary.90}",
      },
    },
    tertiary: {
      value: {
        base: "{colors.palette.tertiary.40}",
        _dark: "{colors.palette.tertiary.80}",
      },
    },
    onTertiary: {
      value: {
        base: "{colors.palette.white}",
        _dark: "{colors.palette.tertiary.20}",
      },
    },
    tertiaryContainer: {
      value: {
        base: "{colors.palette.tertiary.90}",
        _dark: "{colors.palette.tertiary.30}",
      },
    },
    onTertiaryContainer: {
      value: {
        base: "{colors.palette.tertiary.10}",
        _dark: "{colors.palette.tertiary.90}",
      },
    },
    error: {
      value: {
        base: "{colors.palette.error.40}",
        _dark: "{colors.palette.error.80}",
      },
    },
    errorContainer: {
      value: {
        base: "{colors.palette.error.90}",
        _dark: "{colors.palette.error.30}",
      },
    },
    onError: {
      value: {
        base: "{colors.palette.white}",
        _dark: "{colors.palette.error.20}",
      },
    },
    onErrorContainer: {
      value: {
        base: "{colors.palette.error.10}",
        _dark: "{colors.palette.error.90}",
      },
    },
    background: {
      value: {
        base: "{colors.palette.neutral.99}",
        _dark: "{colors.palette.neutral.10}",
      },
    },
    onBackground: {
      value: {
        base: "{colors.palette.neutral.10}",
        _dark: "{colors.palette.neutral.99}",
      },
    },
    surface: {
      value: {
        base: "{colors.palette.neutral.99}",
        _dark: "{colors.palette.neutralVariant.30}",
      },
    },
    onSurface: {
      value: {
        base: "{colors.palette.neutral.10}",
        _dark: "{colors.palette.neutralVariant.80}",
      },
    },
    surfaceVariant: {
      value: {
        base: "{colors.palette.neutralVariant.90}",
        _dark: "{colors.palette.neutralVariant.60}",
      },
    },
    onSurfaceVariant: {
      value: {
        base: "{colors.palette.neutralVariant.30}",
        _dark: "{colors.palette.neutral.10}",
      },
    },
    outline: {
      value: {
        base: "{colors.palette.neutralVariant.50}",
        _dark: "{colors.palette.neutral.90}",
      },
    },
    inverseOnSurface: {
      value: {
        base: "{colors.palette.neutral.95}",
        _dark: "{colors.palette.primary.40}",
      },
    },
    inverseSurface: {
      value: {
        base: "{colors.palette.neutral.20}",
        _dark: "{colors.palette.neutral.90}",
      },
    },
    inversePrimary: {
      value: {
        base: "{colors.palette.primary.80}",
        _dark: "{colors.palette.primary.40}",
      },
    },
    shadow: {
      value: {
        base: "{colors.palette.black}",
        _dark: "{colors.palette.black}",
      },
    },
    surfaceTint: {
      value: {
        base: "{colors.palette.primary.40}",
        _dark: "{colors.palette.primary.80}",
      },
    },
    outlineVariant: {
      value: {
        base: "{colors.palette.neutralVariant.80}",
        _dark: "{colors.palette.neutralVariant.30}",
      },
    },
    scrim: {
      value: {
        base: "{colors.palette.black}",
        _dark: "{colors.palette.black}",
      },
    },
  },
});
