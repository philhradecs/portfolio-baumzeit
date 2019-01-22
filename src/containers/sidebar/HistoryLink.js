import React from 'react';
import { Link, Location } from '@reach/router';

export default (props) => (
	<Location>
		{({ location }) => {
		  const prevPath = ({ prevPath: location.pathname });
		  return <Link {...props} state={prevPath}></Link>
			}
		}
	</Location>
)
