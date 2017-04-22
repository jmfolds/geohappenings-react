import React from 'react';

export default 
<div className="modal fade" id="about-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 className="modal-title" id="myModalLabel">About...</h4>
      </div>
      <div className="modal-body">
        <p>A rewrite of the original <a href="http://esri.github.io/100-lines-or-less-js/geohappenings/">GeoHappenings app.</a></p>
        <p>This application is built with <a href="https://facebook.github.io/react/">React</a> and <a href="http://getbootstrap.com/">Bootstrap</a>. <a href="http://gulpjs.com/">Webpack</a> is used to automate the front-end workflow and the backing database is a <a href="https://www.firebase.com/">Firebase</a> instance.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>;