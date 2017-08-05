import * as Marionette from "backbone.marionette";

class MarionetteApp extends Marionette.Application {
    constructor() {
        super();
        this.on("initialize:after", this.initializeAfter);
    }
    initializeAfter() {
        alert("initializeAfter called");
    }
}