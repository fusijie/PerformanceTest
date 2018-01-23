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
        this.menuItem.parent = null;
        for (let i = 0; i < config.TEST_CASE.length; i++) {
            let testCaseInfo = config.TEST_CASE[i];
            testCaseInfo.index = i;
            let menuItem = cc.instantiate(this.menuItem);
            let name = menuItem.getChildByName("name");
            let toggle = menuItem.getChildByName("toggle");
            name.getComponent(cc.Label).string = `${i + 1}. ${testCaseInfo.name}`;
            name.color = testCaseInfo.scene === "" ? cc.Color.RED : cc.Color.BLACK;
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
        config.setSceneArgs(testCaseInfo);
        cc.director.loadScene(testCaseInfo.scene);
    },

    onClickAutoTest: function () {
        config.IS_AUTO_TESTING = true;
        config.AUTO_CASE_CURSOR = 0;
        config.AUTO_TEST_CASE = [];
        config.AUTO_TEST_RESULT = {
            os: cc.sys.os,
            browser: cc.sys.browserType,
            time: Date.now(),
            data: []
        };
        for (let i = 0; i < config.TEST_CASE.length; i++) {
            let testCaseInfo = config.TEST_CASE[i];
            if (testCaseInfo.auto) {
                config.AUTO_TEST_CASE.push(testCaseInfo);
            }
        }
        if (config.AUTO_TEST_CASE.length) {
            let testCaseInfo = config.AUTO_TEST_CASE[config.AUTO_CASE_CURSOR];
            config.CURRENT_CASE = testCaseInfo.index;
            config.setSceneArgs(testCaseInfo);
            cc.director.loadScene(testCaseInfo.scene);
        }
    },
    
});
