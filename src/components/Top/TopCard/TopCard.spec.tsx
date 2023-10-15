import { sampleUserInfo } from "@/contexts/sample";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TopCard from ".";

describe("TopCard", () => {
  beforeEach(() => {
    render(<TopCard userInfo={sampleUserInfo}></TopCard>);
  });

  it("", () => {});
});
