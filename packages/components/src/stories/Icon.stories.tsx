import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../components/Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select" },
    size: { control: "number" },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "arrow-right",
  },
};
