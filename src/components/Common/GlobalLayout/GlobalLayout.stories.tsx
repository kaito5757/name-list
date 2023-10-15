import type { Meta, StoryObj } from "@storybook/react";
import GlobalLayout from ".";

const meta = {
  title: "Components/Common/GlobalLayout",
  component: GlobalLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlobalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalLayoutDemo: Story = {
  args: {},
};
