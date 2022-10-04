import { render } from "@testing-library/react";
import EventDetail from "../EventDetail";
import { eventData } from "../../../constants";

describe("<EventDetail />", () => {
  const { container } = render(<EventDetail data={eventData} />);

  it("should match EventDetail component to snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
