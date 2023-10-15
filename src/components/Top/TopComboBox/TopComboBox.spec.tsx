import { SampleTopComboBoxSelectOptionAry } from "@/contexts/sample";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TopComboBox from ".";

describe("TopComboBox", () => {
  const placeholderText = "プレースホルダーテキスト";
  const noOptionsText = "存在しないテキスト";
  const handleChange = (id: number) => console.log(id);

  beforeEach(() => {
    render(
      <TopComboBox
        selectOptions={SampleTopComboBoxSelectOptionAry}
        placeholderText={placeholderText}
        noOptionsText={noOptionsText}
        handleChange={handleChange}
      ></TopComboBox>,
    );
  });

  it("", () => {});
});
