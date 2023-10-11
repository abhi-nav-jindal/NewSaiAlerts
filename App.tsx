import React from 'react';

// user defined imports
import Navigator from './src/Navigation/navigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
