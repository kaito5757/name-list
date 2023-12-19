import type { Meta, StoryObj } from "@storybook/react";
import GlobalNavigation from ".";

const meta = {
  title: "Components/Common/GlobalNavigation",
  component: GlobalNavigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlobalNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalNavigationDemo: Story = {
  args: {},
};
