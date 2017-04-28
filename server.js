var AlexaAppServer = require('alexa-app-server');

var server = new AlexaAppServer({
        port: 3001,
        app_dir: "apps",
        app_root: "/",

        httpEnabled: true,
        verify: false,
        server_root: __dirname,

        httpsEnabled: false,
        // httpsPort: 443,
        // privateKey: 'private-key.pem',
        // certificate: 'certificate.pem',


        // Use preRequest to load user data on each request and add it to the request json.
        // In reality, this data would come from a db or files, etc.
        preRequest: function(json, req, res) {
                console.log("preRequest fired");
        },
        // Add a dummy attribute to the response
        postRequest: function(json, req, res) {
                json.dummy = "text";
        },

        debug: true
});
server.start();

