import { render, screen } from "@testing-library/react";
import GlobalHeader from ".";
import "@testing-library/jest-dom";

describe("GlobalNavigation", () => {
  const logoName = "ロゴ";
  const listNameText = "名簿一覧";

  beforeEach(() => {
    render(
      <GlobalHeader
        logoName={logoName}
        listNameText={listNameText}
      ></GlobalHeader>,
    );
  });

  it("", () => {});
});
