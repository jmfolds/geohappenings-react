require("./app.scss");
import 'bootstrap/dist/js/bootstrap.js';
import template from './app.html';
import MapView from './Components/Map/map.jsx';
import AboutView from './Components/About/About.jsx';
import Happenings from './Components/Happenings/Happenings.jsx';
import React from 'react';
import { render } from 'react-dom';

class application {
    constructor(opts) {
        const firebase = require("firebase/app");

        const config = {
            apiKey: "AIzaSyCPHiXRpGNUFv9LNhfZ1fGFjQnsC6cRACE",
            authDomain: "luminous-fire-5575.firebaseapp.com",
            databaseURL: "https://luminous-fire-5575.firebaseio.com",
            projectId: "luminous-fire-5575",
            storageBucket: "luminous-fire-5575.appspot.com",
            messagingSenderId: "1001797472035"
        };
        firebase.initializeApp(config);
        this.rootView = document.getElementById('app-container').innerHTML = template;
        this.MapView = render(
            <MapView />,
            document.getElementById('map-container')
        );
        this.aboutView = render(
            <AboutView />,
            document.getElementById('modal-container')
        );
        this.happeningsList = render(
            <Happenings />,
            document.getElementById('modal-container')
        );
    }
}

window.app = application;

module.exports = application;
