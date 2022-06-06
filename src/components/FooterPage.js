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

const FooterPage = () => {
    return (

<div>
    <footer>
        <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png" />
        <img src="https://www.batdongsanhungphat.vn/wp-content/uploads/2021/12/twitter-logo-icon-vector-29228035.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Google_Plus_logo_%282015-2019%29.svg/800px-Google_Plus_logo_%282015-2019%29.svg.png" />
        <h2 class="no">Contact Details</h2>
        <p>hanhluong122002@gmail.com</p>
        <p>+84 935 789 609</p>
    </footer>
</div>
    );
};
export default FooterPage;