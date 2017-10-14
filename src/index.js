import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Root from './Root';

import registerServiceWorker from './registerServiceWorker';


import { Switch } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <Root>
      <App>
        <Switch>
        </Switch>
      </App>
    </Root>
), document.getElementById('root'))

registerServiceWorker();
