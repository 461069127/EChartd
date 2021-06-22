(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));

  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '10px',
      left: '0%',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        axisLine: {
          lineStyle: {
            width: "1",
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            width: "1",
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  var option = {
    grid: {
      left: '22%',
      top: '10%',
      bottom: '3%',
    },
    xAxis: {
      show: false
    },
    yAxis: {
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
      axisLine: {
        color: "#fff",
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff"
      }
    },
    series: [
      {
        name: '条',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141]
      },
      {
        name: '框',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141]
      }
    ]
  };

  myChart.setOption(option);

})();

// (function () {
//   var myChart = echarts.init(document.querySelector(".line .chart"));

//   var option = {
//     tooltip: {
//         trigger: 'axis'
//     },
//     legend: {
//         data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
//     },
//     grid: {
//       top:'10%',
//       left: '3%',
//       bottom: '3%',
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [
//         {
//             name: '邮件营销',
//             type: 'line',
//             stack: '总量',
//             data: [120, 132, 101, 134, 90, 230, 210]
//         },
//         {
//             name: '联盟广告',
//             type: 'line',
//             stack: '总量',
//             data: [220, 182, 191, 234, 290, 330, 310]
//         },
//         {
//             name: '视频广告',
//             type: 'line',
//             stack: '总量',
//             data: [150, 232, 201, 154, 190, 330, 410]
//         },
//         {
//             name: '直接访问',
//             type: 'line',
//             stack: '总量',
//             data: [320, 332, 301, 334, 390, 330, 320]
//         },
//         {
//             name: '搜索引擎',
//             type: 'line',
//             stack: '总量',
//             data: [820, 932, 901, 934, 1290, 1330, 1320]
//         }
//     ]
//   };
//   myChart.setOption(option);

// })();