define(function (require) {
    var React = require('react/react');

    var YahooAttribution = React.createFactory(React.createClass({
        render: function() {
            var div = React.createFactory('div');
            
            return div(null,
                React.DOM.a({href: this.props.link, target: '_blank'},
                    React.DOM.h5(null, 'Weather provided by Yahoo')
                )

            );
        }
    }));

    return YahooAttribution;
});