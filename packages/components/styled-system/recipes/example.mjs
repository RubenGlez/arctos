import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const exampleFn = /* @__PURE__ */ createRecipe('undefined', {}, [])

const exampleVariantMap = {}

const exampleVariantKeys = Object.keys(exampleVariantMap)

export const example = /* @__PURE__ */ Object.assign(memo(exampleFn), {
  __recipe__: true,
  __name__: 'example',
  raw: (props) => props,
  variantKeys: exampleVariantKeys,
  variantMap: exampleVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, exampleVariantKeys)
  },
})