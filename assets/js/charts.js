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

  var piechart = new CanvasJS.Chart("piechart",
  {
    theme: "theme2",
    title:{
      text: "Course Match"
    },
    data: [
    {
      type: "pie",
      showInLegend: true,
      toolTipContent: "{y} - #percent %",
      yValueFormatString: "#0.#,,. Million",
      legendText: "{indexLabel}",
      dataPoints: [
        {  y: 4181563, indexLabel: "PlayStation 3" },
        {  y: 2175498, indexLabel: "Wii" },
        {  y: 3125844, indexLabel: "Xbox 360" }
      ]
    }
    ]
  });
  piechart.render();

  var splineArea = new CanvasJS.Chart("splineArea", {
    title: {
      text: "School"
    },
    animationEnabled: true,
    axisY: {
      includeZero: false,
      prefix: "$ "
    },
    toolTip: {
      shared: true,
      content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> <span style='\"'color: dimgrey;'\"'>${y}</span> "
    },
    legend: {
      fontSize: 13
    },
    data: [
    {
      type: "splineArea",
      showInLegend: true,
      name: "Salaries",
      color: "rgba(54,158,173,.6)",
      dataPoints: [
      { x: new Date(2012, 2), y: 30000 },
      { x: new Date(2012, 3), y: 35000 },
      { x: new Date(2012, 4), y: 30000 },
      { x: new Date(2012, 5), y: 30400 },
      { x: new Date(2012, 6), y: 20900 },
      { x: new Date(2012, 7), y: 31000 },
      { x: new Date(2012, 8), y: 30200 },
      { x: new Date(2012, 9), y: 30000 },
      { x: new Date(2012, 10), y: 33000 },
      { x: new Date(2012, 11), y: 38000 },
      { x: new Date(2013, 0), y: 38900 },
      { x: new Date(2013, 1), y: 39000 }

      ]
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Office Cost",
      color: "rgba(134,180,2,.7)",
      dataPoints: [
      { x: new Date(2012, 2), y: 20100 },
      { x: new Date(2012, 3), y: 16000 },
      { x: new Date(2012, 4), y: 14000 },
      { x: new Date(2012, 5), y: 18000 },
      { x: new Date(2012, 6), y: 18000 },
      { x: new Date(2012, 7), y: 21000 },
      { x: new Date(2012, 8), y: 22000 },
      { x: new Date(2012, 9), y: 25000 },
      { x: new Date(2012, 10), y: 23000 },
      { x: new Date(2012, 11), y: 25000 },
      { x: new Date(2013, 0), y: 26000 },
      { x: new Date(2013, 1), y: 25000 }

      ]
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Entertainment",
      color: "rgba(194,70,66,.6)",
      dataPoints: [
      { x: new Date(2012, 2), y: 10100 },
      { x: new Date(2012, 3), y: 6000 },
      { x: new Date(2012, 4), y: 3400 },
      { x: new Date(2012, 5), y: 4000 },
      { x: new Date(2012, 6), y: 9000 },
      { x: new Date(2012, 7), y: 3900 },
      { x: new Date(2012, 8), y: 4200 },
      { x: new Date(2012, 9), y: 5000 },
      { x: new Date(2012, 10), y: 14300 },
      { x: new Date(2012, 11), y: 12300 },
      { x: new Date(2013, 0), y: 8300 },
      { x: new Date(2013, 1), y: 6300 }

      ]
    },
    {
      type: "splineArea",
      showInLegend: true,
      color: "rgba(127,96,132,.6)",
      name: "Maintenance",
      dataPoints: [
      { x: new Date(2012, 2), y: 1700 },
      { x: new Date(2012, 3), y: 2600 },
      { x: new Date(2012, 4), y: 1000 },
      { x: new Date(2012, 5), y: 1400 },
      { x: new Date(2012, 6), y: 900 },
      { x: new Date(2012, 7), y: 1000 },
      { x: new Date(2012, 8), y: 1200 },
      { x: new Date(2012, 9), y: 5000 },
      { x: new Date(2012, 10), y: 1300 },
      { x: new Date(2012, 11), y: 2300 },
      { x: new Date(2013, 0), y: 2800 },
      { x: new Date(2013, 1), y: 1300 }

      ]
    },
    {
      type: "spline",
      showInLegend: true,
      color: "rgba(127,96,255,.6)",
      name: "Average",
      dataPoints: [
      { x: new Date(2012, 2), y: 15475 },
      { x: new Date(2012, 3), y: 14900 },
      { x: new Date(2012, 4), y: 12100 },
      { x: new Date(2012, 5), y: 13450 },
      { x: new Date(2012, 6), y: 12200 },
      { x: new Date(2012, 7), y: 14225 },
      { x: new Date(2012, 8), y: 14400 },
      { x: new Date(2012, 9), y: 16250 },
      { x: new Date(2012, 10), y: 17900 },
      { x: new Date(2012, 11), y: 19400 },
      { x: new Date(2013, 0), y: 19000 },
      { x: new Date(2013, 1), y: 17900 }

      ]
    }

    ]
  });

  splineArea.render();
  var stackedArea = new CanvasJS.Chart("stackedArea", {
    title: {
      text: "Location",
      margin: 15
    },
    toolTip: {
      shared: true
    },
    axisX: {
      valueFormatString: "MMM",
      interval: 1,
      intervalType: "month"
    },
    axisY: {
      maximum: 3100,
      interval: 1000
    },

    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
    {
      type: "stackedArea",
      name: "cars",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 00, 1), y: 1100 },
      { x: new Date(2012, 01, 1), y: 1200 },
      { x: new Date(2012, 02, 1), y: 1000 },
      { x: new Date(2012, 03, 1), y: 1200 },
      { x: new Date(2012, 04, 1), y: 1600 },
      { x: new Date(2012, 05, 1), y: 1800 },
      { x: new Date(2012, 06, 1), y: 1400 },
      { x: new Date(2012, 07, 1), y: 1500 },
      { x: new Date(2012, 08, 1), y: 1600 },
      { x: new Date(2012, 09, 1), y: 1800 }

      ]
    },
    {
      type: "stackedArea",
      name: "trucks",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 00, 1), y: 150 },
      { x: new Date(2012, 01, 1), y: 171 },
      { x: new Date(2012, 02, 1), y: 155 },
      { x: new Date(2012, 03, 1), y: 150 },
      { x: new Date(2012, 04, 1), y: 165 },
      { x: new Date(2012, 05, 1), y: 195 },
      { x: new Date(2012, 06, 1), y: 155 },
      { x: new Date(2012, 07, 1), y: 145 },
      { x: new Date(2012, 08, 1), y: 140 },
      { x: new Date(2012, 09, 1), y: 151 }

      ]
    },
    {
      type: "stackedArea",
      name: "bicycles",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 00, 1), y: 71 },
      { x: new Date(2012, 01, 1), y: 41 },
      { x: new Date(2012, 02, 1), y: 55 },
      { x: new Date(2012, 03, 1), y: 50 },
      { x: new Date(2012, 04, 1), y: 65 },
      { x: new Date(2012, 05, 1), y: 95 },
      { x: new Date(2012, 06, 1), y: 45 },
      { x: new Date(2012, 07, 1), y: 95 },
      { x: new Date(2012, 08, 1), y: 60 },
      { x: new Date(2012, 09, 1), y: 40 }

      ]
    },

    {
      type: "stackedArea",
      name: "motorcycles",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 00, 1), y: 861 },
      { x: new Date(2012, 01, 1), y: 761 },
      { x: new Date(2012, 02, 1), y: 775 },
      { x: new Date(2012, 03, 1), y: 680 },
      { x: new Date(2012, 04, 1), y: 785 },
      { x: new Date(2012, 05, 1), y: 374 },
      { x: new Date(2012, 06, 1), y: 365 },
      { x: new Date(2012, 07, 1), y: 455 },
      { x: new Date(2012, 08, 1), y: 657 },
      { x: new Date(2012, 09, 1), y: 659 }

      ]
    },
    {
      type: "stackedArea",
      name: "pedistrians",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 00, 1), y: 220 },
      { x: new Date(2012, 01, 1), y: 240 },
      { x: new Date(2012, 02, 1), y: 295 },
      { x: new Date(2012, 03, 1), y: 300 },
      { x: new Date(2012, 04, 1), y: 265 },
      { x: new Date(2012, 05, 1), y: 235 },
      { x: new Date(2012, 06, 1), y: 245 },
      { x: new Date(2012, 07, 1), y: 255 },
      { x: new Date(2012, 08, 1), y: 275 },
      { x: new Date(2012, 09, 1), y: 290 }

      ]
    }

    ]
  });

  stackedArea.render();
}
