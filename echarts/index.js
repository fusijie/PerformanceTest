(()=>{
    //获取数据
    $.post("http://localhost:30000/get_result").done(function (data) {
        data = [{ "platform": "OS X", "time": 1516264431454, "data": [null, { "name": "Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 14, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 8, "minTime": 0, "avgFps": "60" }, null, { "name": "Prefab Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 9, "minTime": 0, "avgFps": "60" }, { "name": "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 8, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Add / Remove Test", "maxTime": 44, "minTime": 0, "avgFps": "59" }, { "name": "Bunny Tree Test", "maxTime": 19, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Active / Inactive Test", "maxTime": 18, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Animation Test", "maxTime": 13, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Frame Animation Test", "maxTime": 8, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Action Test", "maxTime": 14, "minTime": 0, "avgFps": "60" }] }, { "platform": "iOS", "time": 1516269854539, "data": [null, { "name": "Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 39, "minTime": 0, "avgFps": "50" }, null, null, { "name": "Prefab Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 35, "minTime": 0, "avgFps": "42" }, null, { "name": "Bunny Add / Remove Test", "maxTime": 40, "minTime": 0, "avgFps": "43" }, { "name": "Bunny Tree Test", "maxTime": 41, "minTime": 0, "avgFps": "34" }, { "name": "Bunny Active / Inactive Test", "maxTime": 29, "minTime": 0, "avgFps": "45" }, { "name": "Bunny Transform Animation Test", "maxTime": 46, "minTime": 0, "avgFps": "32" }, { "name": "Bunny Frame Animation Test", "maxTime": 30, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Action Test", "maxTime": 61, "minTime": 0, "avgFps": "30" }] }, { "platform": "Android", "time": 1516269856638, "data": [null, null, { "name": "Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 52, "minTime": 0, "avgFps": "28" }, null, null, { "name": "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 130, "minTime": 0, "avgFps": "24" }, { "name": "Bunny Add / Remove Test", "maxTime": 482, "minTime": 0, "avgFps": "3" }, { "name": "Bunny Tree Test", "maxTime": 342, "minTime": 0, "avgFps": "11" }, { "name": "Bunny Active / Inactive Test", "maxTime": 135, "minTime": 0, "avgFps": "19" }, { "name": "Bunny Transform Animation Test", "maxTime": 226, "minTime": 0, "avgFps": "10" }, { "name": "Bunny Frame Animation Test", "maxTime": 109, "minTime": 0, "avgFps": "36" }, { "name": "Bunny Transform Action Test", "maxTime": 157, "minTime": 0, "avgFps": "12" }] }, { "platform": "OS X", "time": 1516269853091, "data": [null, { "name": "Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 12, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 6, "minTime": 0, "avgFps": "60" }, null, { "name": "Prefab Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 9, "minTime": 0, "avgFps": "60" }, { "name": "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 7, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Add / Remove Test", "maxTime": 34, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Tree Test", "maxTime": 12, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Active / Inactive Test", "maxTime": 12, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Animation Test", "maxTime": 11, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Frame Animation Test", "maxTime": 8, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Action Test", "maxTime": 13, "minTime": 0, "avgFps": "60" }] }, { "platform": "iOS", "time": 1516270003979, "data": [null, { "name": "Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 38, "minTime": 0, "avgFps": "40" }, null, null, { "name": "Prefab Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 36, "minTime": 0, "avgFps": "40" }, null, { "name": "Bunny Add / Remove Test", "maxTime": 88, "minTime": 0, "avgFps": "40" }, { "name": "Bunny Tree Test", "maxTime": 49, "minTime": 0, "avgFps": "30" }, { "name": "Bunny Active / Inactive Test", "maxTime": 33, "minTime": 0, "avgFps": "43" }, { "name": "Bunny Transform Animation Test", "maxTime": 46, "minTime": 0, "avgFps": "33" }, { "name": "Bunny Frame Animation Test", "maxTime": 21, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Action Test", "maxTime": 47, "minTime": 0, "avgFps": "30" }] }, { "platform": "Android", "time": 1516270003698, "data": [null, null, { "name": "Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 153, "minTime": 0, "avgFps": "23" }, null, null, { "name": "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 103, "minTime": 0, "avgFps": "27" }, { "name": "Bunny Add / Remove Test", "maxTime": 408, "minTime": 0, "avgFps": "3" }, { "name": "Bunny Tree Test", "maxTime": 133, "minTime": 0, "avgFps": "17" }, { "name": "Bunny Active / Inactive Test", "maxTime": 131, "minTime": 0, "avgFps": "20" }, { "name": "Bunny Transform Animation Test", "maxTime": 172, "minTime": 0, "avgFps": "13" }, { "name": "Bunny Frame Animation Test", "maxTime": 113, "minTime": 0, "avgFps": "33" }, { "name": "Bunny Transform Action Test", "maxTime": 148, "minTime": 0, "avgFps": "15" }] }, { "platform": "OS X", "time": 1516270007412, "data": [null, { "name": "Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 10, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 7, "minTime": 0, "avgFps": "60" }, null, { "name": "Prefab Bunny Test(iPhone 6, Safari, 2600)", "maxTime": 10, "minTime": 0, "avgFps": "60" }, { "name": "Prefab Bunny Test(Vivo Y66, Chrome, 1500)", "maxTime": 13, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Add / Remove Test", "maxTime": 34, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Tree Test", "maxTime": 23, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Active / Inactive Test", "maxTime": 15, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Animation Test", "maxTime": 11, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Frame Animation Test", "maxTime": 6, "minTime": 0, "avgFps": "60" }, { "name": "Bunny Transform Action Test", "maxTime": 29, "minTime": 0, "avgFps": "60" }] }];
        //定义平台
        let platforms = ["OS X", "Windows", "iOS", "Android"];
        for (let i = 0; i < platforms.length; i++) {
            let div = document.createElement("div");
            div.id = platforms[i] + "_chart";
            div.style = "width: 1200px;height:800px;";
            $("#ebox").append(div);

            let chart = echarts.init(div);

            let platform_data = [];
            let xAxisData = [];
            let seriesData = [];
            let legendsData = [];

            //数据分类
            for (let j = 0; j < data.length; j++) {
                if (data[j].platform === platforms[i]) {
                    platform_data.push(data[j]);
                }
            }
            platform_data.sort((a, b) => { return a.time - b.time; });
            for (let j = 0; j < platform_data.length; j++) {
                let _data = platform_data[j];

                //填充xAxisData
                let time = new Date(_data.time);
                let time_str = time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate();
                time_str += "\n" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
                xAxisData.push(time_str);

                //填充legendsData
                for (let k = 0; k < _data.data.length; k++) {
                    if (_data.data[k] && legendsData.indexOf(_data.data[k].name) === -1) {
                        legendsData.push(_data.data[k].name);
                        let _series = {
                            name: _data.data[k].name,
                            data: [],
                            type: "line"
                        };
                        seriesData.push(_series);
                    }
                }
            }
            //填充seriesData
            for (let j = 0; j < platform_data.length; j++) {
                let _data = platform_data[j];
                for (let k = 0; k < legendsData.length; k++) {
                    for (let m = 0; m < _data.data.length; m++) {
                        if (_data.data[m] && _data.data[m].name === legendsData[k]) {
                            seriesData[k].data[j] = _data.data[m].avgFps;
                        }
                    }
                    if (!seriesData[k].data[j]) {
                        seriesData[k].data[j] = 0;
                    }
                }
            }
            //设置chart
            chart.setOption({
                title: {
                    text: "CocosCreator Performance Test" + "(" + platforms[i] + ")",
                },
                tooltip: {},
                legend: {
                    data: legendsData,
                    type: "scroll",
                    orient: "vertical",
                    right: 0,
                    top: "50%"
                },
                xAxis: {
                    data: xAxisData
                },
                yAxis: {
                    max: 60,
                    min: 0
                },
                series: seriesData
            });
        }
    });
})();