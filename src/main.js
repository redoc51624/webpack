// const $=require('jquery');
// $('#target').html('hello to webpack');


var React = require('react');
var ReactDom = require('react-dom');
require('./style.scss');


class Message extends React.Component{
render() {
return(<div>
<h1>this.props.title</h1>
<p>this.props.message</p>
</div>
);
}

}

ReactDom.remder(<Message title="webpack with react" message="welcome to tutorial"/>, document.getElementById('react-container'));
