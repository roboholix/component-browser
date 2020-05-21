import React from "react";
import TestRenderer from 'react-test-renderer';
import { mount } from "enzyme";

import Logo from "./Logo";

describe("Logo", () => {

  test("renders without blowing up", () => {

    const component = TestRenderer.create(
      <Logo />
    ).toJSON();

    expect(component).toMatchSnapshot();

  });

  test("displays the correct text", () => {
    const wrapper = mount(<Logo />);
    expect(wrapper.text()).toContain("Component Browser");
  });


});
