const baseScene = require("baseScene");
const config = require("config");

let bunnyType = 0;
let gravity = 0.5;

let maxX = 0;
let minX = 0;
let maxY = 0;
let minY = 0;

let startBunnyCount = 2;
let isAdding = false;
let count = 0;
let amount = 100;

cc.Class({
    extends: baseScene,

    properties: {
        tex: cc.Texture2D,
        number: cc.Label
    },

    // use this for initialization
    onLoad: function () {
        this._super("bunnyTest");

        this.number.node.zIndex = config.HIGHEST_ZINDEX;

        maxX = cc.winSize.width / 2;
        maxY = cc.winSize.height / 2;
        minX = -maxX;
        minY = -maxY;

        this.reset();

        for (let i = 0; i < startBunnyCount; i++) {
            let bunny = new cc.Node();
            let bunnysp = bunny.addComponent(cc.Sprite);
            bunnysp.spriteFrame = this.currentFrame;
            bunny.speedX = Math.random() * 10;
            bunny.speedY = (Math.random() * 10) - 5;
            bunny.x = minX + 10;
            bunny.y = maxY * 0.7;

            bunny.anchorX = 0.5;
            bunny.anchorY = 1;

            this.bunnys.push(bunny);

            this.node.addChild(bunny);
        }
        count = startBunnyCount;
        this.number.string = count;

        this.node.on('touchstart', () => {
            isAdding = true;
        });
        this.node.on('touchend', () => {
            bunnyType++;
            bunnyType %= 5;
            this.currentFrame = this.bunnyFrames[bunnyType];
            isAdding = false;
        });
        this.node.on('touchcancel', () => {
            bunnyType++;
            bunnyType %= 5;
            this.currentFrame = this.bunnyFrames[bunnyType];
            isAdding = false;
        });
    },

    reset: function () {
        this.bunnys = [];
        
        this.bunnyFrames = [];
        this.bunnyFrames.push(new cc.SpriteFrame(this.tex, cc.rect(2, 47, 26, 37)));
        this.bunnyFrames.push(new cc.SpriteFrame(this.tex, cc.rect(2, 86, 26, 37)));
        this.bunnyFrames.push(new cc.SpriteFrame(this.tex, cc.rect(2, 125, 26, 37)));
        this.bunnyFrames.push(new cc.SpriteFrame(this.tex, cc.rect(2, 164, 26, 37)));
        this.bunnyFrames.push(new cc.SpriteFrame(this.tex, cc.rect(2, 2, 26, 37)));
        this.currentFrame = this.bunnyFrames[0];

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        let bunny, bunnysp, i;
        if (isAdding) {
            for (i = 0; i < amount; i++) {
                bunny = new cc.Node();
                bunnysp = bunny.addComponent(cc.Sprite);
                bunnysp.spriteFrame = this.currentFrame;
                bunny.speedX = Math.random() * 10;
                bunny.speedY = (Math.random() * 10) - 5;
                bunny.x = minX + 10;
                bunny.y = maxY * 0.7;
                bunny.anchorY = 1;
                //bunny.alpha = 0.3 + Math.random() * 0.7;
                this.bunnys.push(bunny);
                bunny.scale = 0.5 + Math.random() * 0.5;

                bunny.rotation = 360 * (Math.random() * 0.2 - 0.1);

                this.node.addChild(bunny);
                count++;
            }
            this.number.string = count;
        }

        for (i = 0; i < this.bunnys.length; i++) {
            bunny = this.bunnys[i];

            let x = bunny.x + bunny.speedX;
            let y = bunny.y - bunny.speedY;
            bunny.speedY += gravity;

            if (x > maxX) {
                bunny.speedX *= -1;
                x = maxX;
            }
            else if (x < minX) {
                bunny.speedX *= -1;
                x = minX;
            }

            if (y < minY) {
                bunny.speedY *= -0.85;
                y = minY;
                if (Math.random() > 0.5) {
                    bunny.speedY -= Math.random() * 6;
                }
            }
            else if (y > maxY) {
                bunny.speedY = 0;
                y = maxY;
            }
            bunny.setPosition(x, y);
        }
    },
});