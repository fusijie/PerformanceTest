const baseScene = require("baseScene");
let config = require("config");

cc.Class({
    extends: baseScene,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this._super(this.name.match(/<(\S*)>/)[1]);
    },
});