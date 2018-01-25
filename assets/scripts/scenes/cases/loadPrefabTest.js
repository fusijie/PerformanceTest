const baseScene = require("baseScene");
let config = require("config");

cc.Class({
    extends: baseScene,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this._super(this.name.match(/<(\S*)>/)[1]);
        this.loadPrefab();
    },

    loadPrefab: function () {
        const gamePrefab = "uiTest/prefab/gamePrefab";
        let _releasePrefab = function (prefab) {
            let list = cc.loader.getDependsRecursively(prefab._uuid);
            //TODO: release all res.
            cc.loader.releaseRes(gamePrefab);
        }
        let _loadPrefab = function (count) {
            let time_0 = performance.now();
            cc.loader.loadRes(gamePrefab, (err, prefab) => {
                if (!err) {
                    let time_1 = performance.now();
                    console.log(time_1 - time_0);
                    count --;
                    if (count > 0) {
                        _loadPrefab(count);
                    }
                }
            });
        };
        _loadPrefab(10);
    }
});