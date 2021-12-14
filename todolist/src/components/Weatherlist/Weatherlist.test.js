import React from "react";
import { shallow } from "enzyme";
import Weatherlist from "./Weatherlist";

describe("Weatherlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Weatherlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
