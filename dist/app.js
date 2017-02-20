var React = require('react');
var ReactDom = require('react-dom');

class App extends React.component{
    render(){
        return(
            <div>
                <h1>Webpack based App</h1>
                <p>App based on Webpack and react</p>
                </div>
        )
    }

}
ReactDom.render(<App />,document.getElementById("react-container"));