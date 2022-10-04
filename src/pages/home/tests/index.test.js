import { render } from "@testing-library/react";
import Home from "../index";

describe("<Home />", () => {
  const { container } = render(<Home />);

  it("should match Home component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
