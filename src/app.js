require("./app.scss");
import 'bootstrap/dist/js/bootstrap.js';
import template from './app.html';
import MapView from './Components/Map/map.jsx';
import AboutView from './Components/About/About.jsx';
import Hello from './hello.jsx';
import React from 'react';
import { render } from 'react-dom';

class application {
    constructor(opts) {
        this.rootView = document.getElementById('app-container').innerHTML = template;
        this.MapView = render(
            <MapView />,
            document.getElementById('map-container')
        );
        this.aboutView = render(
            <AboutView />,
            document.getElementById('modal-container')
        );
        this.MapView.map.on('zoomend', (e) => {
            console.info(e);
        });
    }
    sayHello(name) {
        return render(
            <Hello name={name}/>,
            document.getElementById('hello')
        )
    }
}

window.app = application;

module.exports = application;
