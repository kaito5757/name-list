import { testLogoName, testNavLinks } from "@/constants/testData/header";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import * as react from "@testing-library/react";
import GlobalHeader from ".";

describe("共通ヘッダーのテスト", () => {
  let logoIconLinkEle: HTMLLinkElement;
  let logoTitleLinkEle: HTMLLinkElement;

  beforeEach(() => {
    react.render(
      <GlobalHeader
        logoName={testLogoName}
        navLinks={testNavLinks}
      ></GlobalHeader>,
    );
    logoIconLinkEle = screen.getByTestId("logoIconLink");
    logoTitleLinkEle = screen.getByTestId("logoTitleLink");
  });

  it("ロゴアイコンのリンクが「/」になっているか", () => {
    expect(logoIconLinkEle.getAttribute("href")).toBe("/");
  });

  it("ロゴアイコンが「AdbIcon」であるか", () => {
    const svgEle = logoIconLinkEle.getElementsByTagName("svg")[0];
    expect(svgEle.getAttribute("data-testid")).toBe("AdbIcon");
  });

  it("ロゴタイトルのリンクが「/」になっているか", () => {
    expect(logoTitleLinkEle.getAttribute("href")).toBe("/");
  });

  it(`ロゴタイトルが「${testLogoName}」であるか`, () => {
    expect(logoTitleLinkEle.textContent).toBe(testLogoName);
  });

  it.each(testNavLinks)(
    "ナビゲーション「$children」のリンクが「$href」であるか",
    (navLink) => {
      const navLinkEle = screen.getByTestId(
        `navLink${testNavLinks.indexOf(navLink)}`,
      );
      expect(navLinkEle.getAttribute("href")).toBe(navLink.href);
      expect(navLinkEle.textContent).toBe(navLink.children);
    },
  );
});
