import React from 'react';
import { Location } from '@reach/router';

import SlideNavBar from './full/SlideNavBar';
import TopNavBar from './top/TopNavBar';

export default ({ singleColumn }) => (
  <Location>
    {({ location }) => (
      singleColumn
      ? <TopNavBar location={location} />
      : <SlideNavBar location={location} />
    )}
  </Location>
)