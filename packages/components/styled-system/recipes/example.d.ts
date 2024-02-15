/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ExampleVariant {
  
}

type ExampleVariantMap = {
  [key in keyof ExampleVariant]: Array<ExampleVariant[key]>
}

export type ExampleVariantProps = {
  [key in keyof ExampleVariant]?: ConditionalValue<ExampleVariant[key]> | undefined
}

export interface ExampleRecipe {
  __type: ExampleVariantProps
  (props?: ExampleVariantProps): string
  raw: (props?: ExampleVariantProps) => ExampleVariantProps
  variantMap: ExampleVariantMap
  variantKeys: Array<keyof ExampleVariant>
  splitVariantProps<Props extends ExampleVariantProps>(props: Props): [ExampleVariantProps, Pretty<DistributiveOmit<Props, keyof ExampleVariantProps>>]
}


export declare const example: ExampleRecipe