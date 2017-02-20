var React = require ('react');
var ReactDom  = require('react-dom');
class Contact extends React.Component{
   render(){ 
   return(<div>Contact us</div>)
}
} 
ReactDom.render(<Contact/>,document.getElementById("react-container"));