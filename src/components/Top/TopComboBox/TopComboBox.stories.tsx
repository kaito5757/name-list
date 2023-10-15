import type { Meta, StoryObj } from "@storybook/react";
import TopComboBox from ".";
import { SampleTopComboBoxSelectOptionAry } from "@/contexts/sample";

const meta = {
  title: "Components/TopTopComboBox",
  component: TopComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TopComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopComboBoxDemo: Story = {
  args: {
    selectOptions: SampleTopComboBoxSelectOptionAry,
    placeholderText: "プレースホルダーテキスト",
    noOptionsText: "存在しないテキスト",
    handleChange: (id: number) => {
      console.log(id);
    },
  },
};
