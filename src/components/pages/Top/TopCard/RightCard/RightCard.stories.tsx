import { sampleItemInfoAry } from "../../../../../constants/sample";
import type { Meta, StoryObj } from "@storybook/react";
import RightCard from ".";

const meta = {
  title: "Components/Top/TopCard",
  component: RightCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightCardDemo: Story = {
  args: {
    itemInfoAry: sampleItemInfoAry,
    snackbarMessage: "スニークバーメッセージ",
  },
};
