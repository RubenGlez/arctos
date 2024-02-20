import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/Badge";
import { badge } from "../../styled-system/recipes";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "string" },
    size: { control: "select", options: badge.variantMap.size },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "3",
    size: "small",
  },
};
