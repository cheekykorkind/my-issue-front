import React from 'react';
import { Button } from '@material-ui/core';
import Layout from "~/components/layout/layout";

const Page: React.FC = () => {
  return (
    <Layout pageTitle="helloo">
      <Button color="primary">Hello World</Button>
    </Layout>
  );
};

export default Page;