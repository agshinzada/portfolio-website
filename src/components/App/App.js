import ContentCard from "../Card/ContentCard";
import HeaderCard from "../Card/HeaderCard";
import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import { Route } from "react-router";
import Bgeffect from "../Utility/Bgeffect";
import { HashRouter } from "react-router-dom";
import WorkModal from "../WorksPage/WorkModal";

function App() {
  return (
    <Fragment>
      <header className="header">
        <Navbar />
        <div className="header__shadow"></div>
        <HeaderCard />
      </header>
      <div className="content">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={ContentCard} />
          <Route path="/resume" exact component={ContentCard} />
          <Route path="/works" exact component={ContentCard} />
          <Route path="/contact" exact component={ContentCard} />
        </HashRouter>
      </div>
      <Bgeffect />
      <WorkModal />
    </Fragment>
  );
}

export default App;
