'use strict';

var header = <header className="well"><h1>Hello JSX</h1></header>;

// define a JS variable
var imgUrl = 'https://goo.gl/n1tBtn';

// include the URL in the JSX
var pic = <img src={imgUrl} alt="A Picture" />;
var main = <div>{header}<main>{pic}</main></div>;

class HelloMessage extends React.Component {
    //Components MUST have a render() method
    render() {
        //this method returns the elements (JSX)
        //that make up the component
        return <h1>Hello {this.props.greetee}!</h1>;
    }
}

class GoodbyeMessage extends React.Component {
    render() {
        return <h1>See ya later!</h1>;
    }
}

class MessageItem extends React.Component {
    render() {
        return <li>{this.props.msg}</li>
    }
}

class MessageList extends React.Component {
    render() {

        // React compiler will bitch at you if you don't key your items in an array
        var msgItems = this.props.messages.map(function(messageString, index) {
            return <MessageItem msg={messageString} key={index} />;
        });
        return (
            <ul>
                {msgItems}
            </ul>
        );
    }
}

var messagesArray = [
   "Hello world",
   "Black lives matter",
   "Go huskies!"
];

// Anonymous HelloMessage variable, instead of assigning to variable
ReactDOM.render(<MessageList messages={messagesArray}/>, document.querySelector('#root'));