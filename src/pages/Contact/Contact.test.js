import React from "react";

import Contact from "./Contact";

//RTL
import { render, screen, fireEvent } from "@testing-library/react";
//ENZYME
import { mount } from "enzyme";

//RTL

// describe("Contact", () => {
//   test("renders Contact", () => {
//     const { getByLabelText, getByRole, getByText, queryByRole } = render(
//       <Contact />
//     );
//     // screen.getByRole("");
//     // screen.debug();
//     const input = getByLabelText(/imię/i);
//     fireEvent.change(input, { target: { value: "Olga" } });
//     const button = getByRole("button");
//     fireEvent.click(button);
//     // screen.debug();
//     expect(getByText(/twoja wiadomość/i)).toBeInTheDocument();
//     expect(queryByRole("textbox")).toBeNull();
//   });
// });

//ENZYME

// describe("Contact", () => {
//   test("renders Contact", async () => {
//     const wrapper = mount(<Contact />);
//     const input = wrapper.find('input[name="name"]');
//     input.simulate("change", { target: { value: "Olga" } });
//     const button = wrapper.find('input[type="submit"]');
//     button.simulate("submit");

//     expect(wrapper.find("PopUp")).toHaveLength(1);
//     expect(wrapper.find("Form")).toHaveLength(0);
//   });
// });
