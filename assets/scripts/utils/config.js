let config =  {};

/**
 * name: test case name.
 * scene: test case scene name.
 * args: global scene args, you can use it in the scene component.
 * auto: it's auto test or not.
 * desc: test case description.
 */
config.TEST_CASE = [
    { 
        name: "Bunny Test", 
        scene: "bunnyTest", 
        auto: false, 
    },
    {
        name: "Bunny Fixed Count Test",
        scene: "bunnyFixedCountTest",
        args: { 
            osx_chrome: { count: 5000 },
            ios_safari: { count: 2600 },
            ios_chrome: { count: 2600 },
            android_chrome: { count: 1500 },
            android_qq: {count: 1500},
            default: { count: 5000}
        },
        auto: true,
    },
    { 
        name: "Prefab Bunny Test", 
        scene: "prefabBunnyTest", 
        auto: false,
    },
    {
        name: "Prefab Bunny Fixed Count Test",
        scene: "prefabBunnyFixedCountTest",
        args: { 
            osx_chrome: { count: 5000 },
            ios_safari: { count: 2600 },
            ios_chrome: { count: 2600 },
            android_chrome: { count: 1500 },
            android_qq: { count: 1500 },
            default: { count: 5000 }
        },
        auto: true,
    },
    {
        name: "Bunny Add/Remove Test",
        scene: "bunnyDynamicTest",
        args: { 
            osx_chrome: { totalCount: 5000, dynamicCount: 100 },
            ios_safari: { totalCount: 2500, dynamicCount: 100 },
            ios_chrome: { totalCount: 2500, dynamicCount: 100 },
            android_chrome: { totalCount: 1500, dynamicCount: 100 },
            android_qq: { totalCount: 1500, dynamicCount: 100 },
            default: { totalCount: 5000, dynamicCount: 100}
        },
        auto: false,
    },
    {
        name: "Bunny Transform Tree Test",
        scene: "bunnyTreeTest",
        args: {
            osx_chrome: { depth: 5, countPerDepth: 6 },
            ios_safari: { depth: 4, countPerDepth: 6 },
            ios_chrome: { depth: 4, countPerDepth: 6 },
            android_chrome: { depth: 4, countPerDepth: 5 },
            android_qq: { depth: 4, countPerDepth: 5 },
            default: { depth: 5, countPerDepth: 6}
        },
        auto: true,
    },
    {
        name: "Bunny Active/Inactive Test",
        scene: "bunnyActiveTest",
        args: {
            osx_chrome: { depth: 5, countPerDepth: 6 },
            ios_safari: { depth: 4, countPerDepth: 6 },
            ios_chrome: { depth: 4, countPerDepth: 6 },
            android_chrome: { depth: 4, countPerDepth: 5 },
            android_qq: { depth: 4, countPerDepth: 5 },
            default: { depth: 5, countPerDepth: 6 }
        },
        auto: true,
    },
    {
        name: "Bunny Transform Animation Test",
        scene: "bunnyTransformAnimationTest",
        args: {
            osx_chrome: { count: 5000 },
            ios_safari: { count: 2600 },
            ios_chrome: { count: 2600 },
            android_chrome: { count: 1500 },
            android_qq: { count: 1500 },
            default: { count: 5000 }
        },
        auto: true,
    },
    {
        name: "Bunny Frame Animation Test",
        scene: "bunnyFrameAnimationTest",
        args: {
            osx_chrome: { count: 5000 },
            ios_safari: { count: 2600 },
            ios_chrome: { count: 2600 },
            android_chrome: { count: 1500 },
            android_qq: { count: 1500 },
            default: { count: 5000 }
        },
        auto: true,
    },
    {
        name: "Bunny Transform Action Test",
        scene: "bunnyTransformActionTest",
        args: {
            osx_chrome: { count: 5000 },
            ios_safari: { count: 2600 },
            ios_chrome: { count: 2600 },
            android_chrome: { count: 1500 },
            android_qq: { count: 1500 },
            default: { count: 5000 }
        },
        auto: true,
    },
    {
        name: "Load Prefab Test",
        scene: "loadPrefabTest",
        args: {
            osx_chrome: { count: 10 },
            ios_safari: { count: 10 },
            ios_chrome: { count: 10 },
            android_chrome: { count: 10 },
            android_qq: { count: 10 },
            default: { count: 10 }
        },
        auto: true,
    },
    {
        name: "UI Test",
        scene: "uiTest",
        auto: true,
    },
];

config.setSceneArgs = function (testCaseInfo) {
    let args = {};
    if (testCaseInfo.args) {
        switch (cc.sys.os) {
            case cc.sys.OS_OSX:
                switch (cc.sys.browserType) {
                    case cc.sys.BROWSER_TYPE_CHROME:
                        args = testCaseInfo.args.osx_chrome;
                        break;
                    default:
                        break;
                }
                break;
            case cc.sys.OS_IOS:
                switch (cc.sys.browserType) {
                    case cc.sys.BROWSER_TYPE_SAFARI:
                        args = testCaseInfo.args.ios_safari;
                        break;
                    case cc.sys.BROWSER_TYPE_CHROME:
                        args = testCaseInfo.args.ios_chrome;
                        break;
                    default:
                        break;
                }
                break;
            case cc.sys.OS_ANDROID:
                switch (cc.sys.browserType) {
                    case cc.sys.BROWSER_TYPE_CHROME:
                        args = testCaseInfo.args.android_chrome;
                        break;
                    case cc.sys.BROWSER_TYPE_MOBILE_QQ:
                        args = testCaseInfo.args.android_qq;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        args = args || testCaseInfo.args.default;
    }
    config.SCENE_ARGS = args;
}

config.CURRENT_CASE = -1;

config.HIGHEST_ZINDEX = 99999999;

config.SCENE_ARGS = null;

config.IS_AUTO_TESTING = false;

config.AUTO_CASE_CURSOR = 0;

config.AUTO_TEST_RESULT = {};

config.AUTO_TEST_POST_URL = "http://192.168.54.63:30000/upload_result";

module.exports = config;