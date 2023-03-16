import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components/macro";

import Signup from "./pages/auth/Signup";

import "./App.css";
import Signin from "./pages/auth/Signin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);
  return (
    <div className="app">
      <MainContaienr>
        <RouterProvider router={router} />
      </MainContaienr>
    </div>
  );
}

export default App;

const MainContaienr = styled.div`
  /* margin-top: 100px;
  display: flex;
  justify-content: flex-end;
  padding-inline: 15px;
  height: 100vh;
  margin-inline: auto;

  //Mobile screen
  @media (min-width: 480px) {
    width: 750px;
    padding-inline: 5px;
  }
  //small screen
  @media (min-width: 768px) {
    width: 750px;
    padding-inline: 5px;
  }
  //Medium screen
  @media (min-width: 992px) {
    width: 870px;

    padding-inline: 5px;
  }
  //Big screen
  @media (min-width: 1200px) {
    width: 100%;
    padding-inline: 24px;
  } */
  a {
    text-decoration: none;
    color: var(--mainColor);
  }
`;
