import { stitch } from 'keo';
import r from 'r-dom';

import logo from './logo.svg';
import './App.css';

const render = () => {
  return r.div({ className: 'App' }, [
    r.header({ className: 'App-header' }, [
      r.img({ alt: 'logo', className: 'App-logo', src: logo }),
      r.p(['Welcome to Snagshout!']),
      r.p(['Edit ', r(code, ['src/App.js']), ' and save to reload.']),
    ]),
  ]);
};

export default stitch({ render });
