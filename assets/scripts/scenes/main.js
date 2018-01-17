let config = require("config");

cc.Class({
    extends: cc.Component,

    properties: {
        scrollViewContent: cc.Node,
        menuItem: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        config.CURRENT_CASE = -1;
        config.PLATFORM_TEST_CASE = [];
        for (let i = 0; i < config.TEST_CASE.length; i++) {
            let testCaseInfo = config.TEST_CASE[i];
            testCaseInfo.index = i;
            if (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) {
                if (!testCaseInfo.platform || testCaseInfo.platform === cc.sys.os) {
                    config.PLATFORM_TEST_CASE.push(testCaseInfo);
                }    
            }else {
                config.PLATFORM_TEST_CASE = config.TEST_CASE;
            }
        }

        this.menuItem.parent = null;
        for (let i = 0; i < config.PLATFORM_TEST_CASE.length; i++) {
            let testCaseInfo = config.PLATFORM_TEST_CASE[i];
            let menuItem = cc.instantiate(this.menuItem);
            let name = menuItem.getChildByName("name");
            let toggle = menuItem.getChildByName("toggle");
            name.getComponent(cc.Label).string = `${i + 1}. ${testCaseInfo.name}`;
            toggle.getComponent(cc.Toggle).isChecked = testCaseInfo.auto;
            menuItem.getComponent(cc.Button).clickEvents[0].customEventData = testCaseInfo.index;
            menuItem.parent = this.scrollViewContent;
        }
    },

    onClickTestCase: function (_, data) {
        let testCaseIndex = parseInt(data);
        let testCaseInfo = config.TEST_CASE[testCaseIndex];
        if (!testCaseInfo) {
            cc.warn("Error test case.");
            return;
        }
        config.CURRENT_CASE = testCaseIndex;
        config.SCENE_ARGS = testCaseInfo.args;
        cc.director.loadScene(testCaseInfo.scene);
    },
    
});
