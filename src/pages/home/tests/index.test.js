import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../index";

describe("<Home />", () => {
  const { container } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  it("should match Home component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
