import React from "react";
import { shallow } from "enzyme";
import Header from "../../header/Header";

test("should test header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
