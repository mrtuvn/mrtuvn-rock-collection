import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "components";

interface AppLayoutProps {
  children: any;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>Adrian's Music Collection</title>
      <meta
        name="description"
        content={`Long live rock 'n'roll! Adrian has been collecting oldschool rock and metal CDs since childhood. He's a proud owner of some of the rare releases.`}
      />
    </Helmet>

    <Header />
    <main className="main">{children}</main>
    <Footer />
  </Fragment>
);

export { AppLayout };