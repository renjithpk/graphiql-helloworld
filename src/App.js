import './App.css';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.min.css';
import { explorerPlugin } from '@graphiql/plugin-explorer';
import React from 'react';
import QuerySelectorPlugin from './QuerySelectorPlugin';

const fetcher = async graphQLParams => {
  const data = await fetch(
    'https://swapi-graphql.netlify.app/.netlify/functions/index',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
      credentials: 'same-origin',
    },
  );
  return data.json().catch(() => data.text());
};
const explorer = explorerPlugin();

const App = () => <GraphiQL
  fetcher={fetcher}
  plugins={[
    explorer,
    QuerySelectorPlugin()
  ]}
  />;

export default App;
