let config =  {};

/**
 * name: test case name.
 * scene: test case scene name.
 * args: global scene args, you can use it in the scene component.
 * platform: the specified platform, default all platforms.
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
        name: "Bunny Test(iPhone 6, Safari, 2600)", 
        scene: "bunnyFixedCountTest", 
        args: { count: 2600 }, 
        platform: cc.sys.OS_IOS, 
        auto: true, 
    },
    { 
        name: "Bunny Test(Vivo Y66, Chrome, 1500)", 
        scene: "bunnyFixedCountTest", 
        args: { count:  1500 }, 
        platform: cc.sys.OS_ANDROID, 
        auto: true, 
    },
    { 
        name: "Prefab Bunny Test", 
        scene: "prefabBunnyTest", 
        auto: false,
    },
    { 
        name: "Prefab Bunny Test(iPhone 6, Safari, 2600)", 
        scene: "prefabBunnyFixedCountTest", 
        args: { count: 2600 }, 
        platform: cc.sys.OS_IOS, 
        auto: true, 
    },
    { 
        name: "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", 
        scene: "prefabBunnyFixedCountTest", 
        args: { count: 1500 }, 
        platform: cc.sys.OS_ANDROID,
        auto: true, 
    },
    {
        name: "Bunny Add/Remove Test",
        scene: "bunnyDynamicTest",
        args: { totalCount: 2500, dynamicCount: 100},
        auto: true,
    },
    {
        name: "Bunny Tree Test",
        scene: "bunnyTreeTest",
        args: { depth: 4, countPerDepth: 6},
        auto: true,
    },
    {
        name: "Bunny Active/Inactive Test",
        scene: "bunnyActiveTest",
        args: { depth: 5, countPerDepth: 5 },
        auto: true,
    },
    {
        name: "Bunny Transform Animation Test",
        scene: "bunnyTransformAnimationTest",
        args: { count: 2000 },
        auto: true,
    },
    {
        name: "Bunny Frame Animation Test",
        scene: "bunnyFrameAnimationTest",
        args: { count: 2000 },
        auto: true,
    },
    {
        name: "Bunny Transform Action Test",
        scene: "bunnyTransformActionTest",
        args: { count: 2000 },
        auto: true,
    },
];

config.CURRENT_CASE = -1;

config.HIGHEST_ZINDEX = 99999999;

config.SCENE_ARGS = null;

config.IS_AUTO_TESTING = false;

config.AUTO_CASE_CURSOR = 0;

config.AUTO_TEST_RESULT = {};

config.AUTO_TEST_POST_URL = "http://192.168.54.63:30000/upload_result";

module.exports = config;