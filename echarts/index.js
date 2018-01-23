(()=>{
    //获取数据
    $.post("http://localhost:30000/get_result").done(function (data) {
        let test_case_names = [];
        let platform_names = [];
        data = data.sort((a, b)=>{return a.time - b.time;});
        for (let i = 0; i < data.length; i++) {
            data[i].platform = data[i].os + " " + data[i].browser;
            if (platform_names.indexOf(data[i].platform) === -1) {
                platform_names.push(data[i].platform);
            }
            for (let j = 0; j < data[i].data.length; j++) {
                let _data = data[i].data[j];
                if (_data && test_case_names.indexOf(_data.name) === -1) {
                    test_case_names.push(_data.name);
                }
            }
        }

        let get_time_str = function (time) {
            let _prefix0 = function (s) {
                return s < 10 ? '0' + s : s;
            }
            let _time = new Date(time);
            let time_str = _time.getFullYear() + "/" + (_time.getMonth() + 1) + "/" + _time.getDate();
            time_str += "\n" + _prefix0(_time.getHours()) + ":" + _prefix0(_time.getMinutes()) + ":" + _prefix0(_time.getSeconds());
            return time_str;
        }

        for (let i = 0; i < test_case_names.length; i++) {
            let xAxisTime = [];
            let xAxisData = [];
            let seriesData = [];
            let legendsData = [];

            //填充xAxisData
            for (let j = 0; j < data.length; j++) {
                xAxisTime.push(data[j].time);
                xAxisData.push(get_time_str(data[j].time));
            }

            //填充 legendsData
            for (let j = 0; j < platform_names.length; j++) {
                legendsData.push(platform_names[j]);
                let series = {
                    name: platform_names[j],
                    data: [],
                    type: "line"
                }
                seriesData.push(series);
            }

            //填充seriesData
            for (let j = 0; j < xAxisTime.length; j++) {
                for (let k = 0; k < seriesData.length; k++) {
                    let is_find = false;
                    for (let m = 0; m < data.length; m++) {
                        if (data[m].time === xAxisTime[j] && data[m].platform === seriesData[k].name) {
                            for (let n = 0; n < data[m].data.length; n++) {
                                let _data = data[m].data[n];
                                if (_data && _data.name === test_case_names[i]) {
                                    is_find = true;
                                    seriesData[k].data.push(_data.avgValue);
                                    break;
                                }
                            }
                        }
                        if (is_find) {
                            break;
                        }
                    }
                    if (!is_find) {
                        seriesData[k].data.push(null);
                    }
                }
            }

            //设置chart
            let div = document.createElement("div");
            div.id = test_case_names[i] + " Chart";
            div.style = "width: 1200px;height:800px;";
            $("#ebox").append(div);
            let chart = echarts.init(div);
            chart.setOption({
                title: {
                    text: test_case_names[i],
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