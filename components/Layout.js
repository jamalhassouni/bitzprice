import Head from "./head";
import Nav from "./nav";

const Layout = props => (
  <div>
    <Head title={props.title} />
    <Nav />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
