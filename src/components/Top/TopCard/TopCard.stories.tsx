import { sampleUserInfo } from "../../../contexts/sample";
import type { Meta, StoryObj } from "@storybook/react";
import TopCard from ".";

const meta = {
  title: "Components/Top/TopCard",
  component: TopCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TopCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopCardDemo: Story = {
  args: {
    userInfo: sampleUserInfo,
  },
};
