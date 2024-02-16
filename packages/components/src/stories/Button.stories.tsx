import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { center } from "../../styled-system/patterns";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={center()}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello 🐼!",
  },
};
