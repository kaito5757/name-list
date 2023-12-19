import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";

const meta = {
  title: "Components/Parts/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDemo: Story = {
  args: {},
};
