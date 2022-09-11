import Aside from "../component-complex/Aside";
import Header from "../component-complex/Header";
import Section from "../component-complex/Section";
import "./MainLayout.scss";
function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-layout">
        <Aside />
        <Section />
      </div>
    </div>
  );
}

export default MainLayout;
