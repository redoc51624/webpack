var React = require ('react');
var ReactDom  = require('react-dom');
class About extends React.Component{
   render(){ 
   return(<div>About us</div>)
}
} 
ReactDom.render(<About/>,document.getElementById("react-container"));