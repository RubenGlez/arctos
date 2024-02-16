import { ForwardedRef, forwardRef, lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export type IconName = keyof typeof dynamicIconImports;

export interface IconProps {
  name: IconName;
  size?: string | number;
  className?: string;
}

const Icon = forwardRef(
  (
    { name, size = 18, className }: IconProps,
    ref: ForwardedRef<SVGSVGElement>
  ) => {
    const LucideIcon = lazy(dynamicIconImports[name]);

    return (
      <Suspense fallback={<></>}>
        <LucideIcon ref={ref} size={size} className={className} />
      </Suspense>
    );
  }
);

export default Icon;
