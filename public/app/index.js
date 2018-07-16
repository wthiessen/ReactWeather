define(function (require) {
    var React = require('react/react');
    var WeatherApp = require('./components/WeatherApp');

    React.render(
        WeatherApp({pollInterval: 30000, city: 'St. Catharines, ON'}),
        document.getElementById('mainDiv')
    );
});