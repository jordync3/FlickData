import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
const API_URL = "http://localhost:4000";
const CUBEJS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTIxOTgzNzQsImV4cCI6MTYxMjI4NDc3NH0.h3yjKSRKJKQHGsS3FT_2amCWX8WjsGtuXwuJ9QeClgc";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});



const AppLayout = ({
  children
}) => <Layout style={{
  height: '100%'
}}>
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>;

const App = ({
  children
}) => <div>
  <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <AppLayout>{children}</AppLayout>
    </ApolloProvider>
  </CubeProvider>;
  </div>

export default App;