import React from "react";
import { shallow } from "enzyme";
import Itemlist from "./Itemlist";

describe("Itemlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Itemlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
