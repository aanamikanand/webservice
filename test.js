const request = require("request"),
    assert = require('assert'),
    app = require("./app"),
    base_url = "http://localhost:3000/";

describe("CSV Formatter Test", (done) => {
  
    it("returns status code 200", () => {
        request.get(base_url, function(error, response, body) {
            assert.equal(200, response.statusCode);
        });
    });
    
    it("returns Hello World", (done) => {
        request.get(base_url, (error, response, body) => {
            assert.equal("Hello World", body);
            app.closeServer();
            done();
        });
    });

});