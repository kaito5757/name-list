import { sampleUserInfo } from "@/constants/sample";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LeftCard from ".";

describe("LeftCard", () => {
  const sampleProfile = sampleUserInfo.profile;
  const imageAlt = "サンプル画像";

  beforeEach(() => {
    render(
      <LeftCard
        imageSrc={sampleProfile.image}
        imageAlt={imageAlt}
        fullName={sampleProfile.fullName}
        fullNameKana={sampleProfile.fullNameKana}
        department={sampleProfile.department}
        team={sampleProfile.team}
      ></LeftCard>,
    );
  });

  it("", () => {});
});
