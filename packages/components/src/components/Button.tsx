import { ForwardedRef, forwardRef } from "react";
import { cx } from "../../styled-system/css";
import { ButtonVariantProps, button } from "../../styled-system/recipes";
import Icon, { IconName } from "./Icon";
import Typography from "./Typography";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: IconName;
  variant?: ButtonVariantProps["variant"];
}

const Button = forwardRef(
  (
    { children, icon, variant = "filled", className, ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { root, stateLayer } = button({ variant, hasIcon: Boolean(icon) });
    const cls = cx(root, "group", className);

    return (
      <button {...rest} ref={ref} className={cls}>
        <div className={stateLayer}>
          {icon && <Icon name={icon} />}
          <Typography size={"labelLarge"}>{children}</Typography>
        </div>
      </button>
    );
  }
);

export default Button;
