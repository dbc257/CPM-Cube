let express = require("express");
let router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

const FinanceMockDB = {
  widgets: {
    widget1: {
      chartType: "line",
      datasets: {
        "2015": [
          {
            label: "Sales",
            data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
            fill: "start",
          },
        ],
        "2016": [
          {
            label: "Sales",
            data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
            fill: "start",
          },
        ],
        "2017": [
          {
            label: "Sales",
            data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
            fill: "start",
          },
        ],
      },
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 32,
            left: 32,
            right: 32,
          },
        },
        elements: {
          point: {
            radius: 4,
            borderWidth: 2,
            hoverRadius: 4,
            hoverBorderWidth: 2,
          },
          line: {
            tension: 0,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
                tickMarkLength: 18,
              },
              ticks: {
                fontColor: "#ffffff",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                min: 1.5,
                max: 5,
                stepSize: 0.5,
              },
            },
          ],
        },
        plugins: {
          filler: {
            propagate: false,
          },
          xLabelsOnTop: {
            active: true,
          },
        },
      },
    },
    widget8: {
      datasets: [
        [
          {
            label: "1Day",
            data: [72, 65, 70, 78, 85, 82, 88],
            fill: false,
            borderColor: "#5c84f1",
          },
        ],
        [
          {
            label: "1Week",
            data: [540, 539, 527, 548, 540, 552, 566],
            fill: false,
            borderColor: "#5c84f1",
          },
        ],
        [
          {
            label: "1Month",
            data: [1520, 1529, 1567, 1588, 1590, 1652, 1622],
            fill: false,
            borderColor: "#5c84f1",
          },
        ],
      ],
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      options: {
        spanGaps: true,
        legend: {
          display: false,
        },
        maintainAspectRatio: true,
        elements: {
          point: {
            radius: 2,
            borderWidth: 1,
            hoverRadius: 2,
            hoverBorderWidth: 1,
          },
          line: {
            tension: 0,
          },
        },
        layout: {
          padding: {
            top: 24,
            left: 16,
            right: 16,
            bottom: 16,
          },
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                // min: 100,
                // max: 500
              },
            },
          ],
        },
      },
      today: "12,540",
      change: {
        value: 321,
        percentage: 2.05,
      },
    },
  },
};

router.get("/", (req, res) => {
  res.json(FinanceMockDB);
});
