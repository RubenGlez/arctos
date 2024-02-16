const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--aspect-ratios-golden)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.linear": {
    "value": "linear",
    "variable": "var(--easings-linear)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.in-out": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.375",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.625",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.prose": {
    "value": "65ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black": {
    "value": "#000",
    "variable": "var(--colors-black)"
  },
  "colors.white": {
    "value": "#fff",
    "variable": "var(--colors-white)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.rose.50": {
    "value": "#fff1f2",
    "variable": "var(--colors-rose-50)"
  },
  "colors.rose.100": {
    "value": "#ffe4e6",
    "variable": "var(--colors-rose-100)"
  },
  "colors.rose.200": {
    "value": "#fecdd3",
    "variable": "var(--colors-rose-200)"
  },
  "colors.rose.300": {
    "value": "#fda4af",
    "variable": "var(--colors-rose-300)"
  },
  "colors.rose.400": {
    "value": "#fb7185",
    "variable": "var(--colors-rose-400)"
  },
  "colors.rose.500": {
    "value": "#f43f5e",
    "variable": "var(--colors-rose-500)"
  },
  "colors.rose.600": {
    "value": "#e11d48",
    "variable": "var(--colors-rose-600)"
  },
  "colors.rose.700": {
    "value": "#be123c",
    "variable": "var(--colors-rose-700)"
  },
  "colors.rose.800": {
    "value": "#9f1239",
    "variable": "var(--colors-rose-800)"
  },
  "colors.rose.900": {
    "value": "#881337",
    "variable": "var(--colors-rose-900)"
  },
  "colors.rose.950": {
    "value": "#4c0519",
    "variable": "var(--colors-rose-950)"
  },
  "colors.pink.50": {
    "value": "#fdf2f8",
    "variable": "var(--colors-pink-50)"
  },
  "colors.pink.100": {
    "value": "#fce7f3",
    "variable": "var(--colors-pink-100)"
  },
  "colors.pink.200": {
    "value": "#fbcfe8",
    "variable": "var(--colors-pink-200)"
  },
  "colors.pink.300": {
    "value": "#f9a8d4",
    "variable": "var(--colors-pink-300)"
  },
  "colors.pink.400": {
    "value": "#f472b6",
    "variable": "var(--colors-pink-400)"
  },
  "colors.pink.500": {
    "value": "#ec4899",
    "variable": "var(--colors-pink-500)"
  },
  "colors.pink.600": {
    "value": "#db2777",
    "variable": "var(--colors-pink-600)"
  },
  "colors.pink.700": {
    "value": "#be185d",
    "variable": "var(--colors-pink-700)"
  },
  "colors.pink.800": {
    "value": "#9d174d",
    "variable": "var(--colors-pink-800)"
  },
  "colors.pink.900": {
    "value": "#831843",
    "variable": "var(--colors-pink-900)"
  },
  "colors.pink.950": {
    "value": "#500724",
    "variable": "var(--colors-pink-950)"
  },
  "colors.fuchsia.50": {
    "value": "#fdf4ff",
    "variable": "var(--colors-fuchsia-50)"
  },
  "colors.fuchsia.100": {
    "value": "#fae8ff",
    "variable": "var(--colors-fuchsia-100)"
  },
  "colors.fuchsia.200": {
    "value": "#f5d0fe",
    "variable": "var(--colors-fuchsia-200)"
  },
  "colors.fuchsia.300": {
    "value": "#f0abfc",
    "variable": "var(--colors-fuchsia-300)"
  },
  "colors.fuchsia.400": {
    "value": "#e879f9",
    "variable": "var(--colors-fuchsia-400)"
  },
  "colors.fuchsia.500": {
    "value": "#d946ef",
    "variable": "var(--colors-fuchsia-500)"
  },
  "colors.fuchsia.600": {
    "value": "#c026d3",
    "variable": "var(--colors-fuchsia-600)"
  },
  "colors.fuchsia.700": {
    "value": "#a21caf",
    "variable": "var(--colors-fuchsia-700)"
  },
  "colors.fuchsia.800": {
    "value": "#86198f",
    "variable": "var(--colors-fuchsia-800)"
  },
  "colors.fuchsia.900": {
    "value": "#701a75",
    "variable": "var(--colors-fuchsia-900)"
  },
  "colors.fuchsia.950": {
    "value": "#4a044e",
    "variable": "var(--colors-fuchsia-950)"
  },
  "colors.purple.50": {
    "value": "#faf5ff",
    "variable": "var(--colors-purple-50)"
  },
  "colors.purple.100": {
    "value": "#f3e8ff",
    "variable": "var(--colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#e9d5ff",
    "variable": "var(--colors-purple-200)"
  },
  "colors.purple.300": {
    "value": "#d8b4fe",
    "variable": "var(--colors-purple-300)"
  },
  "colors.purple.400": {
    "value": "#c084fc",
    "variable": "var(--colors-purple-400)"
  },
  "colors.purple.500": {
    "value": "#a855f7",
    "variable": "var(--colors-purple-500)"
  },
  "colors.purple.600": {
    "value": "#9333ea",
    "variable": "var(--colors-purple-600)"
  },
  "colors.purple.700": {
    "value": "#7e22ce",
    "variable": "var(--colors-purple-700)"
  },
  "colors.purple.800": {
    "value": "#6b21a8",
    "variable": "var(--colors-purple-800)"
  },
  "colors.purple.900": {
    "value": "#581c87",
    "variable": "var(--colors-purple-900)"
  },
  "colors.purple.950": {
    "value": "#3b0764",
    "variable": "var(--colors-purple-950)"
  },
  "colors.violet.50": {
    "value": "#f5f3ff",
    "variable": "var(--colors-violet-50)"
  },
  "colors.violet.100": {
    "value": "#ede9fe",
    "variable": "var(--colors-violet-100)"
  },
  "colors.violet.200": {
    "value": "#ddd6fe",
    "variable": "var(--colors-violet-200)"
  },
  "colors.violet.300": {
    "value": "#c4b5fd",
    "variable": "var(--colors-violet-300)"
  },
  "colors.violet.400": {
    "value": "#a78bfa",
    "variable": "var(--colors-violet-400)"
  },
  "colors.violet.500": {
    "value": "#8b5cf6",
    "variable": "var(--colors-violet-500)"
  },
  "colors.violet.600": {
    "value": "#7c3aed",
    "variable": "var(--colors-violet-600)"
  },
  "colors.violet.700": {
    "value": "#6d28d9",
    "variable": "var(--colors-violet-700)"
  },
  "colors.violet.800": {
    "value": "#5b21b6",
    "variable": "var(--colors-violet-800)"
  },
  "colors.violet.900": {
    "value": "#4c1d95",
    "variable": "var(--colors-violet-900)"
  },
  "colors.violet.950": {
    "value": "#2e1065",
    "variable": "var(--colors-violet-950)"
  },
  "colors.indigo.50": {
    "value": "#eef2ff",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.100": {
    "value": "#e0e7ff",
    "variable": "var(--colors-indigo-100)"
  },
  "colors.indigo.200": {
    "value": "#c7d2fe",
    "variable": "var(--colors-indigo-200)"
  },
  "colors.indigo.300": {
    "value": "#a5b4fc",
    "variable": "var(--colors-indigo-300)"
  },
  "colors.indigo.400": {
    "value": "#818cf8",
    "variable": "var(--colors-indigo-400)"
  },
  "colors.indigo.500": {
    "value": "#6366f1",
    "variable": "var(--colors-indigo-500)"
  },
  "colors.indigo.600": {
    "value": "#4f46e5",
    "variable": "var(--colors-indigo-600)"
  },
  "colors.indigo.700": {
    "value": "#4338ca",
    "variable": "var(--colors-indigo-700)"
  },
  "colors.indigo.800": {
    "value": "#3730a3",
    "variable": "var(--colors-indigo-800)"
  },
  "colors.indigo.900": {
    "value": "#312e81",
    "variable": "var(--colors-indigo-900)"
  },
  "colors.indigo.950": {
    "value": "#1e1b4b",
    "variable": "var(--colors-indigo-950)"
  },
  "colors.blue.50": {
    "value": "#eff6ff",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#dbeafe",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#bfdbfe",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#93c5fd",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#60a5fa",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#3b82f6",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#2563eb",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#1d4ed8",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#1e40af",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#1e3a8a",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#172554",
    "variable": "var(--colors-blue-950)"
  },
  "colors.sky.50": {
    "value": "#f0f9ff",
    "variable": "var(--colors-sky-50)"
  },
  "colors.sky.100": {
    "value": "#e0f2fe",
    "variable": "var(--colors-sky-100)"
  },
  "colors.sky.200": {
    "value": "#bae6fd",
    "variable": "var(--colors-sky-200)"
  },
  "colors.sky.300": {
    "value": "#7dd3fc",
    "variable": "var(--colors-sky-300)"
  },
  "colors.sky.400": {
    "value": "#38bdf8",
    "variable": "var(--colors-sky-400)"
  },
  "colors.sky.500": {
    "value": "#0ea5e9",
    "variable": "var(--colors-sky-500)"
  },
  "colors.sky.600": {
    "value": "#0284c7",
    "variable": "var(--colors-sky-600)"
  },
  "colors.sky.700": {
    "value": "#0369a1",
    "variable": "var(--colors-sky-700)"
  },
  "colors.sky.800": {
    "value": "#075985",
    "variable": "var(--colors-sky-800)"
  },
  "colors.sky.900": {
    "value": "#0c4a6e",
    "variable": "var(--colors-sky-900)"
  },
  "colors.sky.950": {
    "value": "#082f49",
    "variable": "var(--colors-sky-950)"
  },
  "colors.cyan.50": {
    "value": "#ecfeff",
    "variable": "var(--colors-cyan-50)"
  },
  "colors.cyan.100": {
    "value": "#cffafe",
    "variable": "var(--colors-cyan-100)"
  },
  "colors.cyan.200": {
    "value": "#a5f3fc",
    "variable": "var(--colors-cyan-200)"
  },
  "colors.cyan.300": {
    "value": "#67e8f9",
    "variable": "var(--colors-cyan-300)"
  },
  "colors.cyan.400": {
    "value": "#22d3ee",
    "variable": "var(--colors-cyan-400)"
  },
  "colors.cyan.500": {
    "value": "#06b6d4",
    "variable": "var(--colors-cyan-500)"
  },
  "colors.cyan.600": {
    "value": "#0891b2",
    "variable": "var(--colors-cyan-600)"
  },
  "colors.cyan.700": {
    "value": "#0e7490",
    "variable": "var(--colors-cyan-700)"
  },
  "colors.cyan.800": {
    "value": "#155e75",
    "variable": "var(--colors-cyan-800)"
  },
  "colors.cyan.900": {
    "value": "#164e63",
    "variable": "var(--colors-cyan-900)"
  },
  "colors.cyan.950": {
    "value": "#083344",
    "variable": "var(--colors-cyan-950)"
  },
  "colors.teal.50": {
    "value": "#f0fdfa",
    "variable": "var(--colors-teal-50)"
  },
  "colors.teal.100": {
    "value": "#ccfbf1",
    "variable": "var(--colors-teal-100)"
  },
  "colors.teal.200": {
    "value": "#99f6e4",
    "variable": "var(--colors-teal-200)"
  },
  "colors.teal.300": {
    "value": "#5eead4",
    "variable": "var(--colors-teal-300)"
  },
  "colors.teal.400": {
    "value": "#2dd4bf",
    "variable": "var(--colors-teal-400)"
  },
  "colors.teal.500": {
    "value": "#14b8a6",
    "variable": "var(--colors-teal-500)"
  },
  "colors.teal.600": {
    "value": "#0d9488",
    "variable": "var(--colors-teal-600)"
  },
  "colors.teal.700": {
    "value": "#0f766e",
    "variable": "var(--colors-teal-700)"
  },
  "colors.teal.800": {
    "value": "#115e59",
    "variable": "var(--colors-teal-800)"
  },
  "colors.teal.900": {
    "value": "#134e4a",
    "variable": "var(--colors-teal-900)"
  },
  "colors.teal.950": {
    "value": "#042f2e",
    "variable": "var(--colors-teal-950)"
  },
  "colors.emerald.50": {
    "value": "#ecfdf5",
    "variable": "var(--colors-emerald-50)"
  },
  "colors.emerald.100": {
    "value": "#d1fae5",
    "variable": "var(--colors-emerald-100)"
  },
  "colors.emerald.200": {
    "value": "#a7f3d0",
    "variable": "var(--colors-emerald-200)"
  },
  "colors.emerald.300": {
    "value": "#6ee7b7",
    "variable": "var(--colors-emerald-300)"
  },
  "colors.emerald.400": {
    "value": "#34d399",
    "variable": "var(--colors-emerald-400)"
  },
  "colors.emerald.500": {
    "value": "#10b981",
    "variable": "var(--colors-emerald-500)"
  },
  "colors.emerald.600": {
    "value": "#059669",
    "variable": "var(--colors-emerald-600)"
  },
  "colors.emerald.700": {
    "value": "#047857",
    "variable": "var(--colors-emerald-700)"
  },
  "colors.emerald.800": {
    "value": "#065f46",
    "variable": "var(--colors-emerald-800)"
  },
  "colors.emerald.900": {
    "value": "#064e3b",
    "variable": "var(--colors-emerald-900)"
  },
  "colors.emerald.950": {
    "value": "#022c22",
    "variable": "var(--colors-emerald-950)"
  },
  "colors.green.50": {
    "value": "#f0fdf4",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.100": {
    "value": "#dcfce7",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#bbf7d0",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#86efac",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#4ade80",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#22c55e",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#16a34a",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#15803d",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#166534",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#14532d",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.950": {
    "value": "#052e16",
    "variable": "var(--colors-green-950)"
  },
  "colors.lime.50": {
    "value": "#f7fee7",
    "variable": "var(--colors-lime-50)"
  },
  "colors.lime.100": {
    "value": "#ecfccb",
    "variable": "var(--colors-lime-100)"
  },
  "colors.lime.200": {
    "value": "#d9f99d",
    "variable": "var(--colors-lime-200)"
  },
  "colors.lime.300": {
    "value": "#bef264",
    "variable": "var(--colors-lime-300)"
  },
  "colors.lime.400": {
    "value": "#a3e635",
    "variable": "var(--colors-lime-400)"
  },
  "colors.lime.500": {
    "value": "#84cc16",
    "variable": "var(--colors-lime-500)"
  },
  "colors.lime.600": {
    "value": "#65a30d",
    "variable": "var(--colors-lime-600)"
  },
  "colors.lime.700": {
    "value": "#4d7c0f",
    "variable": "var(--colors-lime-700)"
  },
  "colors.lime.800": {
    "value": "#3f6212",
    "variable": "var(--colors-lime-800)"
  },
  "colors.lime.900": {
    "value": "#365314",
    "variable": "var(--colors-lime-900)"
  },
  "colors.lime.950": {
    "value": "#1a2e05",
    "variable": "var(--colors-lime-950)"
  },
  "colors.yellow.50": {
    "value": "#fefce8",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.100": {
    "value": "#fef9c3",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#fef08a",
    "variable": "var(--colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#fde047",
    "variable": "var(--colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#facc15",
    "variable": "var(--colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#eab308",
    "variable": "var(--colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#ca8a04",
    "variable": "var(--colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#a16207",
    "variable": "var(--colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#854d0e",
    "variable": "var(--colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#713f12",
    "variable": "var(--colors-yellow-900)"
  },
  "colors.yellow.950": {
    "value": "#422006",
    "variable": "var(--colors-yellow-950)"
  },
  "colors.amber.50": {
    "value": "#fffbeb",
    "variable": "var(--colors-amber-50)"
  },
  "colors.amber.100": {
    "value": "#fef3c7",
    "variable": "var(--colors-amber-100)"
  },
  "colors.amber.200": {
    "value": "#fde68a",
    "variable": "var(--colors-amber-200)"
  },
  "colors.amber.300": {
    "value": "#fcd34d",
    "variable": "var(--colors-amber-300)"
  },
  "colors.amber.400": {
    "value": "#fbbf24",
    "variable": "var(--colors-amber-400)"
  },
  "colors.amber.500": {
    "value": "#f59e0b",
    "variable": "var(--colors-amber-500)"
  },
  "colors.amber.600": {
    "value": "#d97706",
    "variable": "var(--colors-amber-600)"
  },
  "colors.amber.700": {
    "value": "#b45309",
    "variable": "var(--colors-amber-700)"
  },
  "colors.amber.800": {
    "value": "#92400e",
    "variable": "var(--colors-amber-800)"
  },
  "colors.amber.900": {
    "value": "#78350f",
    "variable": "var(--colors-amber-900)"
  },
  "colors.amber.950": {
    "value": "#451a03",
    "variable": "var(--colors-amber-950)"
  },
  "colors.orange.50": {
    "value": "#fff7ed",
    "variable": "var(--colors-orange-50)"
  },
  "colors.orange.100": {
    "value": "#ffedd5",
    "variable": "var(--colors-orange-100)"
  },
  "colors.orange.200": {
    "value": "#fed7aa",
    "variable": "var(--colors-orange-200)"
  },
  "colors.orange.300": {
    "value": "#fdba74",
    "variable": "var(--colors-orange-300)"
  },
  "colors.orange.400": {
    "value": "#fb923c",
    "variable": "var(--colors-orange-400)"
  },
  "colors.orange.500": {
    "value": "#f97316",
    "variable": "var(--colors-orange-500)"
  },
  "colors.orange.600": {
    "value": "#ea580c",
    "variable": "var(--colors-orange-600)"
  },
  "colors.orange.700": {
    "value": "#c2410c",
    "variable": "var(--colors-orange-700)"
  },
  "colors.orange.800": {
    "value": "#9a3412",
    "variable": "var(--colors-orange-800)"
  },
  "colors.orange.900": {
    "value": "#7c2d12",
    "variable": "var(--colors-orange-900)"
  },
  "colors.orange.950": {
    "value": "#431407",
    "variable": "var(--colors-orange-950)"
  },
  "colors.red.50": {
    "value": "#fef2f2",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.100": {
    "value": "#fee2e2",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#fecaca",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fca5a5",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87171",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#ef4444",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#dc2626",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#b91c1c",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#991b1b",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#7f1d1d",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.950": {
    "value": "#450a0a",
    "variable": "var(--colors-red-950)"
  },
  "colors.neutral.50": {
    "value": "#fafafa",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.100": {
    "value": "#f5f5f5",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#e5e5e5",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#d4d4d4",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#a3a3a3",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#737373",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#525252",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#404040",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#262626",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#171717",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.950": {
    "value": "#0a0a0a",
    "variable": "var(--colors-neutral-950)"
  },
  "colors.stone.50": {
    "value": "#fafaf9",
    "variable": "var(--colors-stone-50)"
  },
  "colors.stone.100": {
    "value": "#f5f5f4",
    "variable": "var(--colors-stone-100)"
  },
  "colors.stone.200": {
    "value": "#e7e5e4",
    "variable": "var(--colors-stone-200)"
  },
  "colors.stone.300": {
    "value": "#d6d3d1",
    "variable": "var(--colors-stone-300)"
  },
  "colors.stone.400": {
    "value": "#a8a29e",
    "variable": "var(--colors-stone-400)"
  },
  "colors.stone.500": {
    "value": "#78716c",
    "variable": "var(--colors-stone-500)"
  },
  "colors.stone.600": {
    "value": "#57534e",
    "variable": "var(--colors-stone-600)"
  },
  "colors.stone.700": {
    "value": "#44403c",
    "variable": "var(--colors-stone-700)"
  },
  "colors.stone.800": {
    "value": "#292524",
    "variable": "var(--colors-stone-800)"
  },
  "colors.stone.900": {
    "value": "#1c1917",
    "variable": "var(--colors-stone-900)"
  },
  "colors.stone.950": {
    "value": "#0c0a09",
    "variable": "var(--colors-stone-950)"
  },
  "colors.zinc.50": {
    "value": "#fafafa",
    "variable": "var(--colors-zinc-50)"
  },
  "colors.zinc.100": {
    "value": "#f4f4f5",
    "variable": "var(--colors-zinc-100)"
  },
  "colors.zinc.200": {
    "value": "#e4e4e7",
    "variable": "var(--colors-zinc-200)"
  },
  "colors.zinc.300": {
    "value": "#d4d4d8",
    "variable": "var(--colors-zinc-300)"
  },
  "colors.zinc.400": {
    "value": "#a1a1aa",
    "variable": "var(--colors-zinc-400)"
  },
  "colors.zinc.500": {
    "value": "#71717a",
    "variable": "var(--colors-zinc-500)"
  },
  "colors.zinc.600": {
    "value": "#52525b",
    "variable": "var(--colors-zinc-600)"
  },
  "colors.zinc.700": {
    "value": "#3f3f46",
    "variable": "var(--colors-zinc-700)"
  },
  "colors.zinc.800": {
    "value": "#27272a",
    "variable": "var(--colors-zinc-800)"
  },
  "colors.zinc.900": {
    "value": "#18181b",
    "variable": "var(--colors-zinc-900)"
  },
  "colors.zinc.950": {
    "value": "#09090b",
    "variable": "var(--colors-zinc-950)"
  },
  "colors.gray.50": {
    "value": "#f9fafb",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.100": {
    "value": "#f3f4f6",
    "variable": "var(--colors-gray-100)"
  },
  "colors.gray.200": {
    "value": "#e5e7eb",
    "variable": "var(--colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#d1d5db",
    "variable": "var(--colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#9ca3af",
    "variable": "var(--colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#6b7280",
    "variable": "var(--colors-gray-500)"
  },
  "colors.gray.600": {
    "value": "#4b5563",
    "variable": "var(--colors-gray-600)"
  },
  "colors.gray.700": {
    "value": "#374151",
    "variable": "var(--colors-gray-700)"
  },
  "colors.gray.800": {
    "value": "#1f2937",
    "variable": "var(--colors-gray-800)"
  },
  "colors.gray.900": {
    "value": "#111827",
    "variable": "var(--colors-gray-900)"
  },
  "colors.gray.950": {
    "value": "#030712",
    "variable": "var(--colors-gray-950)"
  },
  "colors.slate.50": {
    "value": "#f8fafc",
    "variable": "var(--colors-slate-50)"
  },
  "colors.slate.100": {
    "value": "#f1f5f9",
    "variable": "var(--colors-slate-100)"
  },
  "colors.slate.200": {
    "value": "#e2e8f0",
    "variable": "var(--colors-slate-200)"
  },
  "colors.slate.300": {
    "value": "#cbd5e1",
    "variable": "var(--colors-slate-300)"
  },
  "colors.slate.400": {
    "value": "#94a3b8",
    "variable": "var(--colors-slate-400)"
  },
  "colors.slate.500": {
    "value": "#64748b",
    "variable": "var(--colors-slate-500)"
  },
  "colors.slate.600": {
    "value": "#475569",
    "variable": "var(--colors-slate-600)"
  },
  "colors.slate.700": {
    "value": "#334155",
    "variable": "var(--colors-slate-700)"
  },
  "colors.slate.800": {
    "value": "#1e293b",
    "variable": "var(--colors-slate-800)"
  },
  "colors.slate.900": {
    "value": "#0f172a",
    "variable": "var(--colors-slate-900)"
  },
  "colors.slate.950": {
    "value": "#020617",
    "variable": "var(--colors-slate-950)"
  },
  "colors.palette.white": {
    "value": "#ffffff",
    "variable": "var(--colors-palette-white)"
  },
  "colors.palette.black": {
    "value": "#000000",
    "variable": "var(--colors-palette-black)"
  },
  "colors.palette.primary.10": {
    "value": "#001f28",
    "variable": "var(--colors-palette-primary-10)"
  },
  "colors.palette.primary.20": {
    "value": "#003543",
    "variable": "var(--colors-palette-primary-20)"
  },
  "colors.palette.primary.25": {
    "value": "#004152",
    "variable": "var(--colors-palette-primary-25)"
  },
  "colors.palette.primary.30": {
    "value": "#004e60",
    "variable": "var(--colors-palette-primary-30)"
  },
  "colors.palette.primary.35": {
    "value": "#005a70",
    "variable": "var(--colors-palette-primary-35)"
  },
  "colors.palette.primary.40": {
    "value": "#00677f",
    "variable": "var(--colors-palette-primary-40)"
  },
  "colors.palette.primary.50": {
    "value": "#00829f",
    "variable": "var(--colors-palette-primary-50)"
  },
  "colors.palette.primary.60": {
    "value": "#009ec1",
    "variable": "var(--colors-palette-primary-60)"
  },
  "colors.palette.primary.70": {
    "value": "#37b9de",
    "variable": "var(--colors-palette-primary-70)"
  },
  "colors.palette.primary.80": {
    "value": "#5cd5fb",
    "variable": "var(--colors-palette-primary-80)"
  },
  "colors.palette.primary.90": {
    "value": "#b6eaff",
    "variable": "var(--colors-palette-primary-90)"
  },
  "colors.palette.primary.95": {
    "value": "#ddf5ff",
    "variable": "var(--colors-palette-primary-95)"
  },
  "colors.palette.primary.98": {
    "value": "#f2fbff",
    "variable": "var(--colors-palette-primary-98)"
  },
  "colors.palette.primary.99": {
    "value": "#f9fdff",
    "variable": "var(--colors-palette-primary-99)"
  },
  "colors.palette.secondary.10": {
    "value": "#071e26",
    "variable": "var(--colors-palette-secondary-10)"
  },
  "colors.palette.secondary.20": {
    "value": "#1e333b",
    "variable": "var(--colors-palette-secondary-20)"
  },
  "colors.palette.secondary.25": {
    "value": "#293e47",
    "variable": "var(--colors-palette-secondary-25)"
  },
  "colors.palette.secondary.30": {
    "value": "#344a52",
    "variable": "var(--colors-palette-secondary-30)"
  },
  "colors.palette.secondary.35": {
    "value": "#40565e",
    "variable": "var(--colors-palette-secondary-35)"
  },
  "colors.palette.secondary.40": {
    "value": "#4c626a",
    "variable": "var(--colors-palette-secondary-40)"
  },
  "colors.palette.secondary.50": {
    "value": "#647a84",
    "variable": "var(--colors-palette-secondary-50)"
  },
  "colors.palette.secondary.60": {
    "value": "#7e949e",
    "variable": "var(--colors-palette-secondary-60)"
  },
  "colors.palette.secondary.70": {
    "value": "#98afb9",
    "variable": "var(--colors-palette-secondary-70)"
  },
  "colors.palette.secondary.80": {
    "value": "#b3cad4",
    "variable": "var(--colors-palette-secondary-80)"
  },
  "colors.palette.secondary.90": {
    "value": "#cfe6f1",
    "variable": "var(--colors-palette-secondary-90)"
  },
  "colors.palette.secondary.95": {
    "value": "#ddf5ff",
    "variable": "var(--colors-palette-secondary-95)"
  },
  "colors.palette.secondary.98": {
    "value": "#f2fbff",
    "variable": "var(--colors-palette-secondary-98)"
  },
  "colors.palette.secondary.99": {
    "value": "#f9fdff",
    "variable": "var(--colors-palette-secondary-99)"
  },
  "colors.palette.tertiary.10": {
    "value": "#171937",
    "variable": "var(--colors-palette-tertiary-10)"
  },
  "colors.palette.tertiary.20": {
    "value": "#2c2e4d",
    "variable": "var(--colors-palette-tertiary-20)"
  },
  "colors.palette.tertiary.25": {
    "value": "#373959",
    "variable": "var(--colors-palette-tertiary-25)"
  },
  "colors.palette.tertiary.30": {
    "value": "#424465",
    "variable": "var(--colors-palette-tertiary-30)"
  },
  "colors.palette.tertiary.35": {
    "value": "#4e5071",
    "variable": "var(--colors-palette-tertiary-35)"
  },
  "colors.palette.tertiary.40": {
    "value": "#5a5c7e",
    "variable": "var(--colors-palette-tertiary-40)"
  },
  "colors.palette.tertiary.50": {
    "value": "#737498",
    "variable": "var(--colors-palette-tertiary-50)"
  },
  "colors.palette.tertiary.60": {
    "value": "#8d8eb3",
    "variable": "var(--colors-palette-tertiary-60)"
  },
  "colors.palette.tertiary.70": {
    "value": "#a7a8ce",
    "variable": "var(--colors-palette-tertiary-70)"
  },
  "colors.palette.tertiary.80": {
    "value": "#c3c3eb",
    "variable": "var(--colors-palette-tertiary-80)"
  },
  "colors.palette.tertiary.90": {
    "value": "#e0e0ff",
    "variable": "var(--colors-palette-tertiary-90)"
  },
  "colors.palette.tertiary.95": {
    "value": "#f1efff",
    "variable": "var(--colors-palette-tertiary-95)"
  },
  "colors.palette.tertiary.98": {
    "value": "#fbf8ff",
    "variable": "var(--colors-palette-tertiary-98)"
  },
  "colors.palette.tertiary.99": {
    "value": "#fffbff",
    "variable": "var(--colors-palette-tertiary-99)"
  },
  "colors.palette.neutral.10": {
    "value": "#191c1d",
    "variable": "var(--colors-palette-neutral-10)"
  },
  "colors.palette.neutral.20": {
    "value": "#2e3132",
    "variable": "var(--colors-palette-neutral-20)"
  },
  "colors.palette.neutral.25": {
    "value": "#393c3d",
    "variable": "var(--colors-palette-neutral-25)"
  },
  "colors.palette.neutral.30": {
    "value": "#444749",
    "variable": "var(--colors-palette-neutral-30)"
  },
  "colors.palette.neutral.35": {
    "value": "#505354",
    "variable": "var(--colors-palette-neutral-35)"
  },
  "colors.palette.neutral.40": {
    "value": "#5c5f60",
    "variable": "var(--colors-palette-neutral-40)"
  },
  "colors.palette.neutral.50": {
    "value": "#757779",
    "variable": "var(--colors-palette-neutral-50)"
  },
  "colors.palette.neutral.60": {
    "value": "#8f9193",
    "variable": "var(--colors-palette-neutral-60)"
  },
  "colors.palette.neutral.70": {
    "value": "#a9abad",
    "variable": "var(--colors-palette-neutral-70)"
  },
  "colors.palette.neutral.80": {
    "value": "#c5c7c8",
    "variable": "var(--colors-palette-neutral-80)"
  },
  "colors.palette.neutral.90": {
    "value": "#e1e3e4",
    "variable": "var(--colors-palette-neutral-90)"
  },
  "colors.palette.neutral.95": {
    "value": "#eff1f2",
    "variable": "var(--colors-palette-neutral-95)"
  },
  "colors.palette.neutral.98": {
    "value": "#f8f9fb",
    "variable": "var(--colors-palette-neutral-98)"
  },
  "colors.palette.neutral.99": {
    "value": "#fbfcfe",
    "variable": "var(--colors-palette-neutral-99)"
  },
  "colors.palette.neutralVariant.10": {
    "value": "#151d20",
    "variable": "var(--colors-palette-neutral-variant-10)"
  },
  "colors.palette.neutralVariant.20": {
    "value": "#2a3235",
    "variable": "var(--colors-palette-neutral-variant-20)"
  },
  "colors.palette.neutralVariant.25": {
    "value": "#343d40",
    "variable": "var(--colors-palette-neutral-variant-25)"
  },
  "colors.palette.neutralVariant.30": {
    "value": "#40484c",
    "variable": "var(--colors-palette-neutral-variant-30)"
  },
  "colors.palette.neutralVariant.35": {
    "value": "#4b5457",
    "variable": "var(--colors-palette-neutral-variant-35)"
  },
  "colors.palette.neutralVariant.40": {
    "value": "#576063",
    "variable": "var(--colors-palette-neutral-variant-40)"
  },
  "colors.palette.neutralVariant.50": {
    "value": "#70787c",
    "variable": "var(--colors-palette-neutral-variant-50)"
  },
  "colors.palette.neutralVariant.60": {
    "value": "#8a9296",
    "variable": "var(--colors-palette-neutral-variant-60)"
  },
  "colors.palette.neutralVariant.70": {
    "value": "#a4acb1",
    "variable": "var(--colors-palette-neutral-variant-70)"
  },
  "colors.palette.neutralVariant.80": {
    "value": "#bfc8cc",
    "variable": "var(--colors-palette-neutral-variant-80)"
  },
  "colors.palette.neutralVariant.90": {
    "value": "#dbe4e8",
    "variable": "var(--colors-palette-neutral-variant-90)"
  },
  "colors.palette.neutralVariant.95": {
    "value": "#eaf2f6",
    "variable": "var(--colors-palette-neutral-variant-95)"
  },
  "colors.palette.neutralVariant.98": {
    "value": "#f2fbff",
    "variable": "var(--colors-palette-neutral-variant-98)"
  },
  "colors.palette.neutralVariant.99": {
    "value": "#f9fdff",
    "variable": "var(--colors-palette-neutral-variant-99)"
  },
  "colors.palette.error.10": {
    "value": "#410002",
    "variable": "var(--colors-palette-error-10)"
  },
  "colors.palette.error.20": {
    "value": "#690005",
    "variable": "var(--colors-palette-error-20)"
  },
  "colors.palette.error.25": {
    "value": "#7e0007",
    "variable": "var(--colors-palette-error-25)"
  },
  "colors.palette.error.30": {
    "value": "#93000a",
    "variable": "var(--colors-palette-error-30)"
  },
  "colors.palette.error.35": {
    "value": "#a80710",
    "variable": "var(--colors-palette-error-35)"
  },
  "colors.palette.error.40": {
    "value": "#ba1a1a",
    "variable": "var(--colors-palette-error-40)"
  },
  "colors.palette.error.50": {
    "value": "#de3730",
    "variable": "var(--colors-palette-error-50)"
  },
  "colors.palette.error.60": {
    "value": "#ff5449",
    "variable": "var(--colors-palette-error-60)"
  },
  "colors.palette.error.70": {
    "value": "#ff897d",
    "variable": "var(--colors-palette-error-70)"
  },
  "colors.palette.error.80": {
    "value": "#ffb4ab",
    "variable": "var(--colors-palette-error-80)"
  },
  "colors.palette.error.90": {
    "value": "#ffdad6",
    "variable": "var(--colors-palette-error-90)"
  },
  "colors.palette.error.95": {
    "value": "#ffedea",
    "variable": "var(--colors-palette-error-95)"
  },
  "colors.palette.error.98": {
    "value": "#fff8f7",
    "variable": "var(--colors-palette-error-98)"
  },
  "colors.palette.error.99": {
    "value": "#fffbff",
    "variable": "var(--colors-palette-error-99)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "fonts.roboto": {
    "value": "var(--font-roboto), sans-serif",
    "variable": "var(--fonts-roboto)"
  },
  "shadows.xs": {
    "value": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "variable": "var(--shadows-2xl)"
  },
  "shadows.inner": {
    "value": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inner)"
  },
  "shadows.elevation1": {
    "value": "var(--shadows-1)",
    "variable": "var(--shadows-elevation1)"
  },
  "shadows.elevation2": {
    "value": "var(--shadows-2)",
    "variable": "var(--shadows-elevation2)"
  },
  "shadows.elevation3": {
    "value": "var(--shadows-3)",
    "variable": "var(--shadows-elevation3)"
  },
  "shadows.elevation4": {
    "value": "var(--shadows-4)",
    "variable": "var(--shadows-elevation4)"
  },
  "shadows.elevation5": {
    "value": "var(--shadows-5)",
    "variable": "var(--shadows-elevation5)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.primary": {
    "value": "var(--colors-primary)",
    "variable": "var(--colors-primary)"
  },
  "colors.onPrimary": {
    "value": "var(--colors-on-primary)",
    "variable": "var(--colors-on-primary)"
  },
  "colors.primaryContainer": {
    "value": "var(--colors-primary-container)",
    "variable": "var(--colors-primary-container)"
  },
  "colors.onPrimaryContainer": {
    "value": "var(--colors-on-primary-container)",
    "variable": "var(--colors-on-primary-container)"
  },
  "colors.secondary": {
    "value": "var(--colors-secondary)",
    "variable": "var(--colors-secondary)"
  },
  "colors.onSecondary": {
    "value": "var(--colors-on-secondary)",
    "variable": "var(--colors-on-secondary)"
  },
  "colors.secondaryContainer": {
    "value": "var(--colors-secondary-container)",
    "variable": "var(--colors-secondary-container)"
  },
  "colors.onSecondaryContainer": {
    "value": "var(--colors-on-secondary-container)",
    "variable": "var(--colors-on-secondary-container)"
  },
  "colors.tertiary": {
    "value": "var(--colors-tertiary)",
    "variable": "var(--colors-tertiary)"
  },
  "colors.onTertiary": {
    "value": "var(--colors-on-tertiary)",
    "variable": "var(--colors-on-tertiary)"
  },
  "colors.tertiaryContainer": {
    "value": "var(--colors-tertiary-container)",
    "variable": "var(--colors-tertiary-container)"
  },
  "colors.onTertiaryContainer": {
    "value": "var(--colors-on-tertiary-container)",
    "variable": "var(--colors-on-tertiary-container)"
  },
  "colors.error": {
    "value": "var(--colors-error)",
    "variable": "var(--colors-error)"
  },
  "colors.errorContainer": {
    "value": "var(--colors-error-container)",
    "variable": "var(--colors-error-container)"
  },
  "colors.onError": {
    "value": "var(--colors-on-error)",
    "variable": "var(--colors-on-error)"
  },
  "colors.onErrorContainer": {
    "value": "var(--colors-on-error-container)",
    "variable": "var(--colors-on-error-container)"
  },
  "colors.background": {
    "value": "var(--colors-background)",
    "variable": "var(--colors-background)"
  },
  "colors.onBackground": {
    "value": "var(--colors-on-background)",
    "variable": "var(--colors-on-background)"
  },
  "colors.surface": {
    "value": "var(--colors-surface)",
    "variable": "var(--colors-surface)"
  },
  "colors.onSurface": {
    "value": "var(--colors-on-surface)",
    "variable": "var(--colors-on-surface)"
  },
  "colors.surfaceVariant": {
    "value": "var(--colors-surface-variant)",
    "variable": "var(--colors-surface-variant)"
  },
  "colors.onSurfaceVariant": {
    "value": "var(--colors-on-surface-variant)",
    "variable": "var(--colors-on-surface-variant)"
  },
  "colors.outline": {
    "value": "var(--colors-outline)",
    "variable": "var(--colors-outline)"
  },
  "colors.inverseOnSurface": {
    "value": "var(--colors-inverse-on-surface)",
    "variable": "var(--colors-inverse-on-surface)"
  },
  "colors.inverseSurface": {
    "value": "var(--colors-inverse-surface)",
    "variable": "var(--colors-inverse-surface)"
  },
  "colors.inversePrimary": {
    "value": "var(--colors-inverse-primary)",
    "variable": "var(--colors-inverse-primary)"
  },
  "colors.shadow": {
    "value": "var(--colors-shadow)",
    "variable": "var(--colors-shadow)"
  },
  "colors.surfaceTint": {
    "value": "var(--colors-surface-tint)",
    "variable": "var(--colors-surface-tint)"
  },
  "colors.outlineVariant": {
    "value": "var(--colors-outline-variant)",
    "variable": "var(--colors-outline-variant)"
  },
  "colors.scrim": {
    "value": "var(--colors-scrim)",
    "variable": "var(--colors-scrim)"
  },
  "shadows.1": {
    "value": "var(--shadows-1)",
    "variable": "var(--shadows-1)"
  },
  "shadows.2": {
    "value": "var(--shadows-2)",
    "variable": "var(--shadows-2)"
  },
  "shadows.3": {
    "value": "var(--shadows-3)",
    "variable": "var(--shadows-3)"
  },
  "shadows.4": {
    "value": "var(--shadows-4)",
    "variable": "var(--shadows-4)"
  },
  "shadows.5": {
    "value": "var(--shadows-5)",
    "variable": "var(--shadows-5)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette.white": {
    "value": "var(--colors-color-palette-white)",
    "variable": "var(--colors-color-palette-white)"
  },
  "colors.colorPalette.black": {
    "value": "var(--colors-color-palette-black)",
    "variable": "var(--colors-color-palette-black)"
  },
  "colors.colorPalette.primary.10": {
    "value": "var(--colors-color-palette-primary-10)",
    "variable": "var(--colors-color-palette-primary-10)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.primary.20": {
    "value": "var(--colors-color-palette-primary-20)",
    "variable": "var(--colors-color-palette-primary-20)"
  },
  "colors.colorPalette.20": {
    "value": "var(--colors-color-palette-20)",
    "variable": "var(--colors-color-palette-20)"
  },
  "colors.colorPalette.primary.25": {
    "value": "var(--colors-color-palette-primary-25)",
    "variable": "var(--colors-color-palette-primary-25)"
  },
  "colors.colorPalette.25": {
    "value": "var(--colors-color-palette-25)",
    "variable": "var(--colors-color-palette-25)"
  },
  "colors.colorPalette.primary.30": {
    "value": "var(--colors-color-palette-primary-30)",
    "variable": "var(--colors-color-palette-primary-30)"
  },
  "colors.colorPalette.30": {
    "value": "var(--colors-color-palette-30)",
    "variable": "var(--colors-color-palette-30)"
  },
  "colors.colorPalette.primary.35": {
    "value": "var(--colors-color-palette-primary-35)",
    "variable": "var(--colors-color-palette-primary-35)"
  },
  "colors.colorPalette.35": {
    "value": "var(--colors-color-palette-35)",
    "variable": "var(--colors-color-palette-35)"
  },
  "colors.colorPalette.primary.40": {
    "value": "var(--colors-color-palette-primary-40)",
    "variable": "var(--colors-color-palette-primary-40)"
  },
  "colors.colorPalette.40": {
    "value": "var(--colors-color-palette-40)",
    "variable": "var(--colors-color-palette-40)"
  },
  "colors.colorPalette.primary.50": {
    "value": "var(--colors-color-palette-primary-50)",
    "variable": "var(--colors-color-palette-primary-50)"
  },
  "colors.colorPalette.primary.60": {
    "value": "var(--colors-color-palette-primary-60)",
    "variable": "var(--colors-color-palette-primary-60)"
  },
  "colors.colorPalette.60": {
    "value": "var(--colors-color-palette-60)",
    "variable": "var(--colors-color-palette-60)"
  },
  "colors.colorPalette.primary.70": {
    "value": "var(--colors-color-palette-primary-70)",
    "variable": "var(--colors-color-palette-primary-70)"
  },
  "colors.colorPalette.70": {
    "value": "var(--colors-color-palette-70)",
    "variable": "var(--colors-color-palette-70)"
  },
  "colors.colorPalette.primary.80": {
    "value": "var(--colors-color-palette-primary-80)",
    "variable": "var(--colors-color-palette-primary-80)"
  },
  "colors.colorPalette.80": {
    "value": "var(--colors-color-palette-80)",
    "variable": "var(--colors-color-palette-80)"
  },
  "colors.colorPalette.primary.90": {
    "value": "var(--colors-color-palette-primary-90)",
    "variable": "var(--colors-color-palette-primary-90)"
  },
  "colors.colorPalette.90": {
    "value": "var(--colors-color-palette-90)",
    "variable": "var(--colors-color-palette-90)"
  },
  "colors.colorPalette.primary.95": {
    "value": "var(--colors-color-palette-primary-95)",
    "variable": "var(--colors-color-palette-primary-95)"
  },
  "colors.colorPalette.95": {
    "value": "var(--colors-color-palette-95)",
    "variable": "var(--colors-color-palette-95)"
  },
  "colors.colorPalette.primary.98": {
    "value": "var(--colors-color-palette-primary-98)",
    "variable": "var(--colors-color-palette-primary-98)"
  },
  "colors.colorPalette.98": {
    "value": "var(--colors-color-palette-98)",
    "variable": "var(--colors-color-palette-98)"
  },
  "colors.colorPalette.primary.99": {
    "value": "var(--colors-color-palette-primary-99)",
    "variable": "var(--colors-color-palette-primary-99)"
  },
  "colors.colorPalette.99": {
    "value": "var(--colors-color-palette-99)",
    "variable": "var(--colors-color-palette-99)"
  },
  "colors.colorPalette.secondary.10": {
    "value": "var(--colors-color-palette-secondary-10)",
    "variable": "var(--colors-color-palette-secondary-10)"
  },
  "colors.colorPalette.secondary.20": {
    "value": "var(--colors-color-palette-secondary-20)",
    "variable": "var(--colors-color-palette-secondary-20)"
  },
  "colors.colorPalette.secondary.25": {
    "value": "var(--colors-color-palette-secondary-25)",
    "variable": "var(--colors-color-palette-secondary-25)"
  },
  "colors.colorPalette.secondary.30": {
    "value": "var(--colors-color-palette-secondary-30)",
    "variable": "var(--colors-color-palette-secondary-30)"
  },
  "colors.colorPalette.secondary.35": {
    "value": "var(--colors-color-palette-secondary-35)",
    "variable": "var(--colors-color-palette-secondary-35)"
  },
  "colors.colorPalette.secondary.40": {
    "value": "var(--colors-color-palette-secondary-40)",
    "variable": "var(--colors-color-palette-secondary-40)"
  },
  "colors.colorPalette.secondary.50": {
    "value": "var(--colors-color-palette-secondary-50)",
    "variable": "var(--colors-color-palette-secondary-50)"
  },
  "colors.colorPalette.secondary.60": {
    "value": "var(--colors-color-palette-secondary-60)",
    "variable": "var(--colors-color-palette-secondary-60)"
  },
  "colors.colorPalette.secondary.70": {
    "value": "var(--colors-color-palette-secondary-70)",
    "variable": "var(--colors-color-palette-secondary-70)"
  },
  "colors.colorPalette.secondary.80": {
    "value": "var(--colors-color-palette-secondary-80)",
    "variable": "var(--colors-color-palette-secondary-80)"
  },
  "colors.colorPalette.secondary.90": {
    "value": "var(--colors-color-palette-secondary-90)",
    "variable": "var(--colors-color-palette-secondary-90)"
  },
  "colors.colorPalette.secondary.95": {
    "value": "var(--colors-color-palette-secondary-95)",
    "variable": "var(--colors-color-palette-secondary-95)"
  },
  "colors.colorPalette.secondary.98": {
    "value": "var(--colors-color-palette-secondary-98)",
    "variable": "var(--colors-color-palette-secondary-98)"
  },
  "colors.colorPalette.secondary.99": {
    "value": "var(--colors-color-palette-secondary-99)",
    "variable": "var(--colors-color-palette-secondary-99)"
  },
  "colors.colorPalette.tertiary.10": {
    "value": "var(--colors-color-palette-tertiary-10)",
    "variable": "var(--colors-color-palette-tertiary-10)"
  },
  "colors.colorPalette.tertiary.20": {
    "value": "var(--colors-color-palette-tertiary-20)",
    "variable": "var(--colors-color-palette-tertiary-20)"
  },
  "colors.colorPalette.tertiary.25": {
    "value": "var(--colors-color-palette-tertiary-25)",
    "variable": "var(--colors-color-palette-tertiary-25)"
  },
  "colors.colorPalette.tertiary.30": {
    "value": "var(--colors-color-palette-tertiary-30)",
    "variable": "var(--colors-color-palette-tertiary-30)"
  },
  "colors.colorPalette.tertiary.35": {
    "value": "var(--colors-color-palette-tertiary-35)",
    "variable": "var(--colors-color-palette-tertiary-35)"
  },
  "colors.colorPalette.tertiary.40": {
    "value": "var(--colors-color-palette-tertiary-40)",
    "variable": "var(--colors-color-palette-tertiary-40)"
  },
  "colors.colorPalette.tertiary.50": {
    "value": "var(--colors-color-palette-tertiary-50)",
    "variable": "var(--colors-color-palette-tertiary-50)"
  },
  "colors.colorPalette.tertiary.60": {
    "value": "var(--colors-color-palette-tertiary-60)",
    "variable": "var(--colors-color-palette-tertiary-60)"
  },
  "colors.colorPalette.tertiary.70": {
    "value": "var(--colors-color-palette-tertiary-70)",
    "variable": "var(--colors-color-palette-tertiary-70)"
  },
  "colors.colorPalette.tertiary.80": {
    "value": "var(--colors-color-palette-tertiary-80)",
    "variable": "var(--colors-color-palette-tertiary-80)"
  },
  "colors.colorPalette.tertiary.90": {
    "value": "var(--colors-color-palette-tertiary-90)",
    "variable": "var(--colors-color-palette-tertiary-90)"
  },
  "colors.colorPalette.tertiary.95": {
    "value": "var(--colors-color-palette-tertiary-95)",
    "variable": "var(--colors-color-palette-tertiary-95)"
  },
  "colors.colorPalette.tertiary.98": {
    "value": "var(--colors-color-palette-tertiary-98)",
    "variable": "var(--colors-color-palette-tertiary-98)"
  },
  "colors.colorPalette.tertiary.99": {
    "value": "var(--colors-color-palette-tertiary-99)",
    "variable": "var(--colors-color-palette-tertiary-99)"
  },
  "colors.colorPalette.neutral.10": {
    "value": "var(--colors-color-palette-neutral-10)",
    "variable": "var(--colors-color-palette-neutral-10)"
  },
  "colors.colorPalette.neutral.20": {
    "value": "var(--colors-color-palette-neutral-20)",
    "variable": "var(--colors-color-palette-neutral-20)"
  },
  "colors.colorPalette.neutral.25": {
    "value": "var(--colors-color-palette-neutral-25)",
    "variable": "var(--colors-color-palette-neutral-25)"
  },
  "colors.colorPalette.neutral.30": {
    "value": "var(--colors-color-palette-neutral-30)",
    "variable": "var(--colors-color-palette-neutral-30)"
  },
  "colors.colorPalette.neutral.35": {
    "value": "var(--colors-color-palette-neutral-35)",
    "variable": "var(--colors-color-palette-neutral-35)"
  },
  "colors.colorPalette.neutral.40": {
    "value": "var(--colors-color-palette-neutral-40)",
    "variable": "var(--colors-color-palette-neutral-40)"
  },
  "colors.colorPalette.neutral.50": {
    "value": "var(--colors-color-palette-neutral-50)",
    "variable": "var(--colors-color-palette-neutral-50)"
  },
  "colors.colorPalette.neutral.60": {
    "value": "var(--colors-color-palette-neutral-60)",
    "variable": "var(--colors-color-palette-neutral-60)"
  },
  "colors.colorPalette.neutral.70": {
    "value": "var(--colors-color-palette-neutral-70)",
    "variable": "var(--colors-color-palette-neutral-70)"
  },
  "colors.colorPalette.neutral.80": {
    "value": "var(--colors-color-palette-neutral-80)",
    "variable": "var(--colors-color-palette-neutral-80)"
  },
  "colors.colorPalette.neutral.90": {
    "value": "var(--colors-color-palette-neutral-90)",
    "variable": "var(--colors-color-palette-neutral-90)"
  },
  "colors.colorPalette.neutral.95": {
    "value": "var(--colors-color-palette-neutral-95)",
    "variable": "var(--colors-color-palette-neutral-95)"
  },
  "colors.colorPalette.neutral.98": {
    "value": "var(--colors-color-palette-neutral-98)",
    "variable": "var(--colors-color-palette-neutral-98)"
  },
  "colors.colorPalette.neutral.99": {
    "value": "var(--colors-color-palette-neutral-99)",
    "variable": "var(--colors-color-palette-neutral-99)"
  },
  "colors.colorPalette.neutralVariant.10": {
    "value": "var(--colors-color-palette-neutral-variant-10)",
    "variable": "var(--colors-color-palette-neutral-variant-10)"
  },
  "colors.colorPalette.neutralVariant.20": {
    "value": "var(--colors-color-palette-neutral-variant-20)",
    "variable": "var(--colors-color-palette-neutral-variant-20)"
  },
  "colors.colorPalette.neutralVariant.25": {
    "value": "var(--colors-color-palette-neutral-variant-25)",
    "variable": "var(--colors-color-palette-neutral-variant-25)"
  },
  "colors.colorPalette.neutralVariant.30": {
    "value": "var(--colors-color-palette-neutral-variant-30)",
    "variable": "var(--colors-color-palette-neutral-variant-30)"
  },
  "colors.colorPalette.neutralVariant.35": {
    "value": "var(--colors-color-palette-neutral-variant-35)",
    "variable": "var(--colors-color-palette-neutral-variant-35)"
  },
  "colors.colorPalette.neutralVariant.40": {
    "value": "var(--colors-color-palette-neutral-variant-40)",
    "variable": "var(--colors-color-palette-neutral-variant-40)"
  },
  "colors.colorPalette.neutralVariant.50": {
    "value": "var(--colors-color-palette-neutral-variant-50)",
    "variable": "var(--colors-color-palette-neutral-variant-50)"
  },
  "colors.colorPalette.neutralVariant.60": {
    "value": "var(--colors-color-palette-neutral-variant-60)",
    "variable": "var(--colors-color-palette-neutral-variant-60)"
  },
  "colors.colorPalette.neutralVariant.70": {
    "value": "var(--colors-color-palette-neutral-variant-70)",
    "variable": "var(--colors-color-palette-neutral-variant-70)"
  },
  "colors.colorPalette.neutralVariant.80": {
    "value": "var(--colors-color-palette-neutral-variant-80)",
    "variable": "var(--colors-color-palette-neutral-variant-80)"
  },
  "colors.colorPalette.neutralVariant.90": {
    "value": "var(--colors-color-palette-neutral-variant-90)",
    "variable": "var(--colors-color-palette-neutral-variant-90)"
  },
  "colors.colorPalette.neutralVariant.95": {
    "value": "var(--colors-color-palette-neutral-variant-95)",
    "variable": "var(--colors-color-palette-neutral-variant-95)"
  },
  "colors.colorPalette.neutralVariant.98": {
    "value": "var(--colors-color-palette-neutral-variant-98)",
    "variable": "var(--colors-color-palette-neutral-variant-98)"
  },
  "colors.colorPalette.neutralVariant.99": {
    "value": "var(--colors-color-palette-neutral-variant-99)",
    "variable": "var(--colors-color-palette-neutral-variant-99)"
  },
  "colors.colorPalette.error.10": {
    "value": "var(--colors-color-palette-error-10)",
    "variable": "var(--colors-color-palette-error-10)"
  },
  "colors.colorPalette.error.20": {
    "value": "var(--colors-color-palette-error-20)",
    "variable": "var(--colors-color-palette-error-20)"
  },
  "colors.colorPalette.error.25": {
    "value": "var(--colors-color-palette-error-25)",
    "variable": "var(--colors-color-palette-error-25)"
  },
  "colors.colorPalette.error.30": {
    "value": "var(--colors-color-palette-error-30)",
    "variable": "var(--colors-color-palette-error-30)"
  },
  "colors.colorPalette.error.35": {
    "value": "var(--colors-color-palette-error-35)",
    "variable": "var(--colors-color-palette-error-35)"
  },
  "colors.colorPalette.error.40": {
    "value": "var(--colors-color-palette-error-40)",
    "variable": "var(--colors-color-palette-error-40)"
  },
  "colors.colorPalette.error.50": {
    "value": "var(--colors-color-palette-error-50)",
    "variable": "var(--colors-color-palette-error-50)"
  },
  "colors.colorPalette.error.60": {
    "value": "var(--colors-color-palette-error-60)",
    "variable": "var(--colors-color-palette-error-60)"
  },
  "colors.colorPalette.error.70": {
    "value": "var(--colors-color-palette-error-70)",
    "variable": "var(--colors-color-palette-error-70)"
  },
  "colors.colorPalette.error.80": {
    "value": "var(--colors-color-palette-error-80)",
    "variable": "var(--colors-color-palette-error-80)"
  },
  "colors.colorPalette.error.90": {
    "value": "var(--colors-color-palette-error-90)",
    "variable": "var(--colors-color-palette-error-90)"
  },
  "colors.colorPalette.error.95": {
    "value": "var(--colors-color-palette-error-95)",
    "variable": "var(--colors-color-palette-error-95)"
  },
  "colors.colorPalette.error.98": {
    "value": "var(--colors-color-palette-error-98)",
    "variable": "var(--colors-color-palette-error-98)"
  },
  "colors.colorPalette.error.99": {
    "value": "var(--colors-color-palette-error-99)",
    "variable": "var(--colors-color-palette-error-99)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar