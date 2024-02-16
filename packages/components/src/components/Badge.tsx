import { ForwardedRef, forwardRef } from "react";
import { BadgeVariantProps, badge } from "../../styled-system/recipes/badge";
import Typography from "./Typography";
import { cx } from "../../styled-system/css";

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  label?: string;
  size?: BadgeVariantProps["size"];
}

const Badge = forwardRef(
  (
    { label, size = "large", className, ...rest }: BadgeProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const cls = cx(badge({ size }), className);

    return (
      <div {...rest} ref={ref} className={cls}>
        {!!label && size === "large" && (
          <Typography size={"labelSmall"} color={"onError"}>
            {label}
          </Typography>
        )}
      </div>
    );
  }
);

export default Badge;
