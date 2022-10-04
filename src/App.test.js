import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  const { container } = render(<App />);

  it("should match App component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
