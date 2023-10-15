import type { Meta, StoryObj } from "@storybook/react";
import GlobalHeader from ".";

const meta = {
  title: "Components/Common/GlobalHeader",
  component: GlobalHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlobalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalHeaderDemo: Story = {
  args: {
    logoName: "ロゴ名",
    listNameText: "名簿一覧名",
  },
};
