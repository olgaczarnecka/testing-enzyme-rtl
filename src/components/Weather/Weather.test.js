import React from "react";

import Weather from "./Weather";

import { act } from "react-dom/test-utils";

//RTL
import { render, screen, waitFor } from "@testing-library/react";
//ENZYME
import { mount } from "enzyme";

// describe("Weather", () => {
//   test("renders Weather", async () => {
//     render(<Weather />);

//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//     expect(screen.queryByText(/pogoda na dziś/i)).toBeNull();

//     screen.debug();

//     expect(
//       await waitFor(() => screen.getByText(/pogoda na dziś/i))
//     ).toBeInTheDocument();

//     expect(await screen.findByText(/pogoda na dziś/i)).toBeInTheDocument();

//     screen.debug();
//   });
// });

// describe("Weather", () => {
//   test("renders Weather", async () => {
//     const wrapper = mount(<Weather />);

//     expect(wrapper.contains("Loading")).toBeTruthy();
//     expect(wrapper.contains("Pogoda na dziś:")).toBeFalsy();

//     await act(async () => {
//       await Promise.resolve(wrapper);
//       wrapper.update();
//     });

//     console.log(wrapper.debug());

//     expect(wrapper.contains("Loading")).toBeFalsy();
//     expect(wrapper.contains("Pogoda na dziś:")).toBeTruthy();
//   });
// });
