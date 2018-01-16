const config = require("config");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function (subScriptName) {
        this.resetTestConfig();
        this.createUI(subScriptName);
        cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, ()=>{
            if (!this.isTesting) {
                return;
            }
            this.beforeUpdateTime = Date.now();
        });
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, ()=>{
            if (!this.isTesting) {
                return;
            }
            this.afterDrawTime = Date.now();
            this.durationTimeArr.push(this.afterDrawTime - this.beforeUpdateTime);
        });
    },

    resetTestConfig: function () {
        this.isTesting = false;
        this.beginTestTime = 3;
        this.testDurationTime = 3;
        this.beforeUpdateTime = 0;
        this.afterDrawTime = 0;
        this.durationTimeArr = [];
    },

    createUI: function (subScriptName) {
        //title
        let testCaseInfo = config.TEST_CASE[config.CURRENT_CASE];
        let title = this._createLabel(`${config.CURRENT_CASE + 1}. ${testCaseInfo.name}`);
        title.x = 0;
        title.y = 230;
        title.zIndex = config.HIGHEST_ZINDEX;
        title.parent = this.node;

        //test button
        cc.loader.loadRes("internal/default_btn_normal", cc.SpriteFrame, (err, spriteFrame) => {
            let testBtn = this._createButton("Test", spriteFrame, this.node, subScriptName, "onClickTest");
            testBtn.parent = this.node;
            testBtn.x = 360;
            testBtn.y = 230;
            testBtn.zIndex = config.HIGHEST_ZINDEX;
            let closeBtn = this._createButton("Back", spriteFrame, this.node, subScriptName, "onClickClose");
            closeBtn.parent = this.node;
            closeBtn.x = 360;
            closeBtn.y = 180;
            closeBtn.zIndex = config.HIGHEST_ZINDEX;
        });

        //test result
        let result = this._createLabel("", cc.Color.WHITE, 20);
        result.x = 0;
        result.y = -280;
        result.parent = this.node;
        result.zIndex = config.HIGHEST_ZINDEX;
        this.labelResult = result;
    },

    startTest: function () {
        if (this.isTesting) {
            cc.warn("It is testing now...");
            return;
        }
        this.resetTestConfig();
        this.isTesting = true;
        this.labelResult.getComponent(cc.Label).string = "testing...";
        this.scheduleOnce(()=>{
            this.isTesting = false;
            this._calculateReuslt();
        }, this.testDurationTime);
    },

    onClickClose: function () {
        cc.director.loadScene("main");
    },

    onClickTest: function () {
        this.startTest();  
    },

    _calculateReuslt: function () {
        let result = "result: "
        let maxValue = 0;
        let minValue = 0;
        let avgValue = 0;
        let totalValue = 0;
        for (let i = 0; i < this.durationTimeArr.length; i++) {
            let value = this.durationTimeArr[i];
            if (value > maxValue) {
                maxValue = value;
            }
            if (value < minValue) {
                minValue = value;
            }
            totalValue += value;
        }
        avgValue = (totalValue / this.durationTimeArr.length).toFixed(0);
        result += `max: ${maxValue}, min: ${minValue}, avg: ${avgValue}`;
        this.labelResult.getComponent(cc.Label).string = result;
    },

    _createLabel: function (string, color, fontSize) {
        string = string || "";
        color = color || cc.Color.WHITE;
        fontSize = fontSize || 40;
        let labelNode = new cc.Node();
        labelNode.color = color;
        let labelComponent = labelNode.addComponent(cc.Label);
        labelComponent.lineHeight = fontSize = labelComponent.fontSize = fontSize;
        
        labelComponent.string = string;
        return labelNode;
    },

    _createButton: function (name, spriteFrame, target, componentName, handlerName) {
        let buttonNode = new cc.Node();
        let buttonComponent = buttonNode.addComponent(cc.Button);
        let eventHandler = new cc.Component.EventHandler();
        eventHandler.component = componentName;
        eventHandler.handler = handlerName;
        eventHandler.target = target;
        buttonComponent.clickEvents.push(eventHandler);
        buttonComponent.transition = cc.Button.Transition.SCALE;
        let spriteComponent = buttonNode.addComponent(cc.Sprite);
        spriteComponent.spriteFrame = spriteFrame;
        spriteComponent.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        spriteComponent.trim = true;
        let labelNode = this._createLabel(name, cc.Color.BLACK, 20);
        labelNode.parent = buttonNode;
        buttonNode.width = 100;
        buttonNode.height = 40;
        return buttonNode;
    },
    
});
