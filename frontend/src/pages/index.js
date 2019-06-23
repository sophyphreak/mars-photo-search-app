import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MarsPhotoSearch from '../components/marsPhotoSearch/marsPhotoSearch';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MarsPhotoSearch />
  </Layout>
);

export default IndexPage;
