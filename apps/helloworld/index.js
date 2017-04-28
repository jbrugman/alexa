var alexa = require('alexa-app');

// Define an alexa-app
var app = new alexa.app('helloworld');
app.id = require('./package.json').alexa.applicationId;

// When you start your app, using 'Alexa, ask hello world', this will fired.
app.launch(function(req, res) {
    res.say('Welcome at your first Alexa hello world application!');
});

// Build-in stop-intent by Amazon, fires when you call 'Alexa stop'`
app.intent('AMAZON.StopIntent', {
}, function(req, res) {
    res.say("Hmmm, I would love to ignore that command, but bye it is.");
});

// Yet another build-in intent, calling Help wil give you info on how to use your app.
app.intent('AMAZON.HelpIntent', {
}, function(req, res) {
    res.say('You can use the command hello followed by your name to start your custom intent.');
});

// Your custom intent	    
app.intent('Hello', {
    "slots": {"MYNAME": "AMAZON.US.FIRST_NAME"},
    "utterances": ["my {name is|name's} {Jim|Paul|Jen|MYNAME}"]
}, function(req, res) {
    res.say("Hello " + req.slot('MYNAME') + ". I would spell your name as:  <say-as interpret-as=\"spell-out\">"
        + req.slot('MYNAME') + "</say-as>");
});

module.exports = app;
