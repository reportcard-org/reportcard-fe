import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://reportcard-rails.herokuapp.com/graphql", 
  cache: new InMemoryCache()
}); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>
);

reportWebVitals();
