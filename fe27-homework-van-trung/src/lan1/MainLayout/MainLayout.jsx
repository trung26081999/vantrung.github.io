import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./MainLayout.scss";
import Sidebar from "../Sidebar/Sidebar";
import MainList from "../MainList/MainList";

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <Nav />
      <div className="content-layout">
        <Sidebar />
        <MainList />
      </div>
    </div>
  );
}

export default MainLayout;
