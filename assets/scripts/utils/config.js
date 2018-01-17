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
        name: "Bunny Test(Vivo Y66, Default, 1500)", 
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
        name: "Prefab Bunny Test(Vivo Y66, Default, 1500)", 
        scene: "prefabBunnyFixedCountTest", 
        args: { count: 1500 }, 
        platform: cc.sys.OS_ANDROID,
        auto: true, 
    },
    {
        name: "Bunny Dynamic Test",
        scene: "bunnyDynamicTest",
        args: { totalCount: 2500, dynamicCount: 100},
        auto: true,
    },
    {
        name: "Bunny Tree Test",
        scene: "bunnyTreeTest",
        args: { depth: 4, countPerDepth: 7},
        auto: true,
    },
];

config.CURRENT_CASE = -1;

config.HIGHEST_ZINDEX = 99999999;

config.SCENE_ARGS = null;

module.exports = config;