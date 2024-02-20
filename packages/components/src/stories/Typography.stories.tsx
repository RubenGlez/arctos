import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography";
import { typography } from "../../styled-system/recipes";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    align: { control: "select", options: typography.variantMap.align },
    color: { control: "select", options: typography.variantMap.color },
    size: { control: "select", options: typography.variantMap.size },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello world!",
    as: "p",
  },
};
