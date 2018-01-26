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
            let deps = cc.loader.getDependsRecursively(prefab._uuid);
            // deps.forEach((item, i, arr)=>{
            //     let load_item = cc.loader.getItem(item);
            //     if (load_item && load_item.content) {
            //         switch (load_item.content.constructor.name) {
            //             case "cc_SpriteFrame":
            //             case "cc_AnimationClip":
            //                 cc.loader.releaseAsset(load_item.content);
            //                 break;
            //             case "cc_Texture2D":
            //             case "cc_BitmapFont":
            //                 cc.loader.releaseAsset(load_item.content);
            //                 break;
            //             case "cc_Prefab":
            //                 if (load_item.content._uuid !== prefab._uuid) {
            //                     _releasePrefab(load_item.content);
            //                 }
            //                 break;
            //             default:
            //                 break;
            //         }
            //     }
            // });
            cc.loader.release(deps);
        }
        let _loadPrefab = (count) => {
            let beforeLoadTime = performance.now();
            cc.loader.loadRes(gamePrefab, (err, prefab) => {
                if (!err) {
                    let afterLoadTime = performance.now();
                    this.durationTimeArr.push(afterLoadTime - beforeLoadTime);
                    count --;
                    _releasePrefab(prefab);
                    if (count > 0) {
                        _loadPrefab(count);
                    }else {
                        finish_cb && finish_cb();
                    }
                }
            });
        };
        _loadPrefab(config.SCENE_ARGS.count);
    }
});