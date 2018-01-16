const config = require("config");

cc.Class({
    extends: cc.Component,

    properties: {
        scrollViewContent: cc.Node,
        menuItem: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.menuItem.parent = null;
        for (let i = 0; i < config.TESTCASE.length; i++) {
            let testCaseInfo = config.TESTCASE[i];
            let menuItem = cc.instantiate(this.menuItem);
            let name = menuItem.getChildByName("name");
            name.getComponent(cc.Label).string = `${i + 1}. ${testCaseInfo.name}`;
            menuItem.getComponent(cc.Button).clickEvents[0].customEventData = i;
            menuItem.parent = this.scrollViewContent;
        }
    },

    onClickTestCase: function (_, data) {
        let testCaseIndex = parseInt(data);
        let testCaseInfo = config.TESTCASE[testCaseIndex];
        if (!testCaseInfo) {
            cc.warn("Error test case.");
            return;
        }
        cc.director.loadScene(testCaseInfo.scene);
    },
    
});
