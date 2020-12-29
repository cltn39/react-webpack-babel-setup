import React from 'react';

import "./styles.scss";

// const App = ({ title }) => <div>{title}</div>;

class App extends React.Component {
    render() {
      return (
        <div className="app-container">
          <img src="./assets/favicon.png"></img>

          <div>Webpack 5 boilerplate for react using babel, sass, with a hot dev server
          and an optimized production build.</div>
          
        </div>
      );
    }
  }

export default App;