import React from "react";
// import { Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
// RTL
import { render, screen, fireEvent, within } from "@testing-library/react";
// ENZYME
import { mount } from "enzyme";

// RTL

// describe("navigation works", () => {
//   // const history = createMemoryHistory();

//   beforeEach(() => {
//     render(
//       //  <Router history={history}>
//       <MemoryRouter initialEntries={["/"]}>
//         <App />
//       </MemoryRouter>
//       //  </Router>
//     );
//   });

//   test("redirects to About page", () => {
//     screen.debug();
//     fireEvent.click(screen.getByText("O nas"));
//     screen.debug();
//     expect(
//       screen.getByText(/chcesz dowiedzieć się więcej/i)
//     ).toBeInTheDocument();
//   });

//   //   test("redirects to Contact page", () => {
//   //     screen.debug();
//   //     fireEvent.click(screen.getByText(/kontakt/i));
//   //     screen.debug();
//   //     expect(
//   //       screen.getByText(/chętnie odpowiemy na twoje pytania/i)
//   //     ).toBeInTheDocument();
//   //   });

//   test("redirects to Home page", () => {
//     screen.debug();
//     //   const nav = screen.getByRole("navigation");
//     const { getByText } = within(screen.getByRole("navigation"));
//     const link = getByText(/strona główna/i);
//     fireEvent.click(link);
//     expect(screen.getByText(/witaj/i)).toBeInTheDocument();
//   });
// });

// ENZYME

// describe("navigation", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = mount(
//       <MemoryRouter initialEntries={["/"]}>
//         <App />
//       </MemoryRouter>
//     );
//   });

//   it("redirects to About page", () => {
//     // console.log(wrapper.debug());
//     const navigation = wrapper.find("nav");
//     const link = navigation.find("a").at(1);
//     link.simulate("click", { button: 0 });
//     expect(
//       wrapper.findWhere(
//         (node) => node.text() === "Witaj ! Oto nasza strona główna"
//       )
//     ).toBeTruthy();
//   });

//   //   it("redirects to Contact page", () => {
//   //     console.log(wrapper.debug());
//   //     const link = wrapper.find("a").at(3);
//   //     link.simulate("click", { button: 0 });
//   //     expect(
//   //       wrapper.findWhere(
//   //         (node) => node.text() === "Chętnie odpowiemy na Twoje pytania!"
//   //       )
//   //     ).toBeTruthy();
//   //     expect(wrapper.find("Contact")).toHaveLength(1);
//   //   });
// });
