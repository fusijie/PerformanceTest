const baseLoaderScene = require("baseLoaderScene");
let config = require("config");

cc.Class({
    extends: baseLoaderScene,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this._super(this.name.match(/<(\S*)>/)[1]);
    },

    loadRes: function (finish_cb) {
        const gamePrefab = "uiTest/prefab/gamePrefab";
        let _releasePrefab = (prefab) => {
            let list = cc.loader.getDependsRecursively(prefab._uuid);
            //TODO: release all res.
            cc.loader.releaseRes(gamePrefab);
        }
        let _loadPrefab = (count) => {
            let beforeLoadTime = performance.now();
            cc.loader.loadRes(gamePrefab, (err, prefab) => {
                if (!err) {
                    let afterLoadTime = performance.now();
                    this.durationTimeArr.push(afterLoadTime - beforeLoadTime);
                    count --;
                    if (count > 0) {
                        _loadPrefab(count);
                    }else {
                        finish_cb && finish_cb();
                    }
                }
            });
        };
        _loadPrefab(10);
    }
});