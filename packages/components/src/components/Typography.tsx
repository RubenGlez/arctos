import { forwardRef } from "react";
import { cx } from "../../styled-system/css";
import {
  TypographyVariantProps,
  typography,
} from "../../styled-system/recipes";

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = object
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      children: React.ReactNode;
      color?: TypographyVariantProps["color"];
      size?: TypographyVariantProps["size"];
      align?: TypographyVariantProps["align"];
    }
  >;

type TypographyComponent = <C extends React.ElementType = "span">(
  props: TypographyProps<C>
) => React.ReactNode | null;

const Typography: TypographyComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      children,
      size = "bodyMedium",
      color = "current",
      align = "left",
      className,
      ...rest
    }: TypographyProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    const cls = cx(typography({ size, color, align }), className);

    return (
      <Component {...rest} className={cls} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Typography;
