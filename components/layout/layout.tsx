import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children: ReactNode;
  pageTitle: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageTitle} />
        <meta name="google" content="notranslate" />
      </Head>

      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;