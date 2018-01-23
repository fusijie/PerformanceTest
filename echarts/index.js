(()=>{
    //获取数据
    $.post("http://localhost:30000/get_result").done(function (data) {
        //定义平台
        let platforms = ["OS X", "Windows", "iOS", "Android"];
        let get_time_str = function (time) {
            let _prefix0 = function (s) {
                return s < 10 ? '0' + s : s;
            }
            let _time = new Date(time);
            let time_str = _time.getFullYear() + "/" + (_time.getMonth() + 1) + "/" + _time.getDate();
            time_str += "\n" + _prefix0(_time.getHours()) + ":" + _prefix0(_time.getMinutes()) + ":" + _prefix0(_time.getSeconds());
            return time_str;
        }
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
                xAxisData.push(get_time_str(_data.time));

                //填充legendsData
                for (let k = 0; k < _data.data.length; k++) {
                    if (_data.data[k] && legendsData.indexOf(_data.data[k].name) === -1) {
                        legendsData.push(_data.data[k].name);
                        let _series = {
                            name: _data.data[k].name,
                            data: [],
                            type: "line",
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
                            seriesData[k].data[j] = _data.data[m].avgValue;
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
                tooltip: {
                    axisPointer: {
                        type: "cross",
                    },
                    formatter: '{a}<br />perform time: {c}ms',
                },
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
                },
                series: seriesData
            });
        }
    });
})();