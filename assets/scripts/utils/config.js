let config =  {};

config.TEST_CASE = [
    { name: "Bunny Test", scene: "bunnyTest", auto: false },
    { name: "Bunny Test(iPhone 6, Safari, 2600)", scene: "bunnyTest1", args: { count: 2600 }, auto: true },
    { name: "Bunny Test(Vivo Y66, Default, 1500)", scene: "bunnyTest1", args: { count:  1500 }, auto: true },
    { name: "Prefab Bunny Test", scene: "prefabBunnyTest", auto: false},
    { name: "Prefab Bunny Test(iPhone 6, Safari, 2600)", scene: "prefabBunnyTest1", args: { count: 2600 }, auto: true },
    { name: "Prefab Bunny Test(Vivo Y66, Default, 1500)", scene: "prefabBunnyTest1", args: { count: 1500 }, auto: true },
];

config.CURRENT_CASE = -1;

config.HIGHEST_ZINDEX = 99999999;

config.SCENE_ARGS = null;

module.exports = config;