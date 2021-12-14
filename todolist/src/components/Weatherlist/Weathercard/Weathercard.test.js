import React from "react";
import { shallow } from "enzyme";
import Weathercard from "./Weathercard";

describe("Weathercard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Weathercard />);
    expect(wrapper).toMatchSnapshot();
  });
});
