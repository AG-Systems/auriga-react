# auriga-react
My own starter code of react.js

Clone project
```
git clone https://github.com/AG-Systems/auriga-react.git
```

Install dependencies
```
npm install
```

To start run

```
npm start
```

## Adding Redux

Bash

```
npm install --save react-redux
```

```
cd client

mkdir containers

mkdir actions

mkdir reducers

mkdir sagas

```

## Adding React-router

Bash

```
npm install react-router
```

```
cd client

mkdir views

cd views

touch Main.js Home.js About.js

cd -  (does not work with windows)

cd components

mkdir Global

cd Global

touch Menu.jsx
```

client/components/Global/Menu.jsx

```
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
            <Link to='/projects' >Projects</Link>
            <Link to='/about'  >About</Link>
      </div>
    );
  }
}
```

client/views/Main.js

```
import React, { Component } from 'react';

import Menu from 'components/Global/Menu';

export default class Main extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='About'>
        <Menu />
        <div  className='render'>
        { children }
        </div>
      </div>
    );
  }
}
```

client/views/Home.js

```
import React, { Component } from 'react';

export default class Home extends Component {
  render() {

    return (
      <div className='Home'>
        <h1>Home </h1>
      </div>
    );
  }
}
```

client/views/About.js

```
import React, { Component } from 'react';

export default class About extends Component {
  render() {

    return (
      <div className='About'>
        <h1> About </h1>
      </div>
    );
  }
}
```

client/index.js 

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';


import Main from 'views/Main';
import Home from 'views/Home';
import About from 'views/About';


ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('root') // eslint-disable-line
);

```



## Adding Express

bash
```
touch server.js
```

```
npm install express
```

server.js
```
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist/'));

app.listen(process.env.PORT || 8080);

```

```
webpack -p
```


## Adding Rails

With rails5 api mode

```
https://sourcey.com/building-the-prefect-rails-5-api-only-app/
```
