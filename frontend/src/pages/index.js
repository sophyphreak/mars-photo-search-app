import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MarsPhotoSearch from '../containers/marsPhotoSearch/marsPhotoSearch';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MarsPhotoSearch />
  </Layout>
);

export default IndexPage;
