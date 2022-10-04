import { render } from "@testing-library/react";
import Events from "../index";

describe("<Events />", () => {
  const { container } = render(<Events />);

  it("should match Events component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
