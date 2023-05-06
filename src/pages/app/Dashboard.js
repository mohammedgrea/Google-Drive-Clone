import Content from "../../components/app/Content";
import Header from "../../components/app/Header";
import Navigation from "../../components/app/Navigation";
import Sidebar from "../../components/app/Sidebar";
import styled from "styled-components/macro";
export default function Dashboard() {
  return (
    <MainContaienr>
      <Header />
      <Navigation />
      <Sidebar />
      <Content />
    </MainContaienr>
  );
}

const MainContaienr = styled.div`
  padding-inline: 20px;
  margin-bottom: 50px;
  box-sizing: border-box;
  overflow: hidden;

  a {
    text-decoration: none;
  }
`;
