import { sampleItemInfoAry } from "@/constants/sample";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RightCard from ".";

describe("RightCard", () => {
  const snackbarMessage = "スニークバーメッセージ";

  beforeEach(() => {
    render(
      <RightCard
        itemInfoAry={sampleItemInfoAry}
        snackbarMessage={snackbarMessage}
      ></RightCard>,
    );
  });

  it("", () => {});
});
