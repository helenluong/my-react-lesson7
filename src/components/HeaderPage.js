import React from 'react';
import { Link } from 'react-router-dom'
// var __html = require('./myport.html');
// var myport = { __html: __html };

// React.module.exports = React.createClass({
//   render: function() {
//     return(
//       <div dangerouslySetInnerHTML={myport} />
//     );
//   }
// });
const HeaderPage = () => {
  return (
    <div>
      <header>
        <div id="generalInfo">
            <div class="my-name">
                <h1>Helen Luong</h1>
                <h2 class="format">Front end dev</h2>
            </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

        a</div>
      </header>
            
      </div>
    );
};

export default HeaderPage;

