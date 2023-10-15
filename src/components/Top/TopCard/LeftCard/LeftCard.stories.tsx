import { sampleUserInfo } from "@/contexts/sample";
import type { Meta, StoryObj } from "@storybook/react";
import LeftCard from ".";

const meta = {
  title: "Components/Top/TopCard",
  component: LeftCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LeftCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const profile = sampleUserInfo.profile;
export const LeftCardDemo: Story = {
  args: {
    imageSrc: profile.image,
    imageAlt: "画像の代替テキスト",
    fullName: profile.fullName,
    fullNameKana: profile.fullNameKana,
    department: profile.department,
    team: profile.team,
  },
};
