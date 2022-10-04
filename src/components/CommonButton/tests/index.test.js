import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CommonButton from "../CommonButton";

describe("<CommonButton />", () => {
  const { container } = render(
    <BrowserRouter>
      <CommonButton />
    </BrowserRouter>
  );

  it("should match CommonButton component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
