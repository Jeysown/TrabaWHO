function createColumnChart() {

  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Overall Result"
    },
    axisY:{
          interval: 5,
        },
    data: [{
      type: "column",
      dataPoints: [
        { y: res[0], label: "R" },
        { y: res[1], label: "I" },
        { y: res[2], label: "A" },
        { y: res[3], label: "S" },
        { y: res[4], label: "E" },
        { y: res[5], label: "C" }

      ]
    }]
  });
  chart.render();
}
