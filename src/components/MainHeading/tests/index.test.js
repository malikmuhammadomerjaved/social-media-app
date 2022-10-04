import { render } from "@testing-library/react";
import MainHeading from "../MainHeading";

describe("<MainHeading />", () => {
  const { container } = render(<MainHeading />);

  it("should match MainHeading component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
