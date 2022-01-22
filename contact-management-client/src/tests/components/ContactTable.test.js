import React from "react";
import { shallow } from "enzyme";

import ContactTable from "../../home/ContactTable";

test("should test Contact Table as empty props component", () => {
  const wrapper = shallow(<ContactTable contactDatas={[]} loading={false} />);
  expect(wrapper).toMatchSnapshot();
});

test("should test Contact Table as valid props component", () => {
  const wrapper = shallow(
    <ContactTable
      contactDatas={[
        { _id: "bb001245", name: "user", email: "test@gmail.com" },
      ]}
      loading={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
