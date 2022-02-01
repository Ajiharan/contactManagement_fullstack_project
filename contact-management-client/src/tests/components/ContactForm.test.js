import React from "react";
import { shallow } from "enzyme";
import ContactForm from "../../home/ContactForm";

test("should test contactForm component", () => {
  const wrapper = shallow(<ContactForm />);
  expect(wrapper).toMatchSnapshot();
});
