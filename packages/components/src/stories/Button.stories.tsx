import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { button } from "../../styled-system/recipes";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: button.variantMap.variant },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "filled",
    disabled: false,
  },
};
