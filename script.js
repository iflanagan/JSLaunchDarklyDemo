
/*
payload: {

        environment: "production" 
       // environment: "QA",
        /*
        person: {
            id: "123",
            username: "imf",
            email: "test@rollbar.com"
        },
        server: {
            host: "web11",
            root: "http://localhost:8443/DemoJSTest/JSDemo/",
            region: "aws-us-east-2"
        },
        custom: {
            bankTransactionId: "46456456456"
        }
    }-

    */

// add Rollbar Snipet here

/*
function getMessage(input) {
  
  alert('Hello ' +input);
}

*/
// add RB snipnet here 


function sayHello() {
  var message = getMessage('hello');
  alert(message);
}

function sayGoodbye() {
  var message = getMessage('goodbye');
  alert(message);
}

