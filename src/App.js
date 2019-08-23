import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First impressions of Sizzy.app</h1>
        <a className="App-link" href="https://sizzy.app/" target="_blank">
          About
        </a>
        <a className="App-link" href="#pros">
          Pros
        </a>
        <a className="App-link" href="#cons">
          Cons
        </a>
        <a className="App-link" href="#misc">
          Misc
        </a>
      </header>
      <main>
        <div id="pros">
          <h2>Pros 👍</h2>
          <ul>
            <li>Makes it simple and quick to test on multiple viewports</li>
            <li>Does one thing and does it well</li>
            <li>Chrome dev-tools</li>
            <li>Works on Linux as well</li>
            <li>Customizable</li>
          </ul>
        </div>
        <div id="cons">
          <h2>Cons 👎</h2>
          <ul>
            <li>Electron app :/</li>
            <li>Synchronized scrolling not always working</li>
            <li>No tabs</li>
            <li>Emulated devices – should still test on real device</li>
            <li>Random refreshes</li>
            <li>Scroll position does not remain</li>
            <li>Loading indicator a bit hidden in the UI</li>
          </ul>
        </div>
        <div id="misc">
          <h2>Misc/Minor things</h2>
          <ul>
            <li>Not good together with Next.js (not a Sizzy issue)</li>
            <li>Used to be a free Open Source project</li>
            <li>No free trial – money back guarantee though</li>
            <li>Try it out yourself</li>
            <li>
              The AppImage does not add the app itself to the menu – have to
              start from CLI
            </li>
          </ul>
        </div>
        <div id="thx">
          <h2>Thanks!</h2>
          <h3>Questions?</h3>
          <span>@0lpeh on Twitter</span>
        </div>
      </main>
    </div>
  );
}

export default App;
