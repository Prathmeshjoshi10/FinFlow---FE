import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { format, subMonths } from 'date-fns';

Chart.register(...registerables);

@Component({
  selector: 'app-income-analysis',
  templateUrl: './income-analysis.component.html',
  styleUrls: ['./income-analysis.component.css'],
})
export class IncomeAnalysisComponent implements OnInit {
  barData: any;
  lineData: any;
  doughnutData: any;

  constructor() {}

  ngOnInit(): void {
    this.renderChart();

    this.barData = {
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70],
        },
      ],
    };

    // const lineLabels = Utils.months({count: 7});
    const lineLabels = this.generateMonthLabels(7);
    console.log('lineLabels --->', lineLabels);

    this.lineData = {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    this.doughnutData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };
  }

  // renderChart() {
  //   const pieChart = new Chart('piechart', {
  //     type: 'pie',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow'],
  //       datasets: [
  //         {
  //           label: 'My First Dataset',
  //           data: [300, 50, 100],
  //           backgroundColor: [
  //             'rgb(255, 99, 132)',
  //             'rgb(54, 162, 235)',
  //             'rgb(255, 205, 86)',
  //           ],
  //           hoverOffset: 4,
  //         },
  //       ],
  //     },
  //   });

  //   const barchart = new Chart('barchart', {
  //     type: 'bar',
  //     data: this.barData,
  //     options: {
  //       scales: {
  //         x: {
  //           stacked: true,
  //         },
  //         y: {
  //           stacked: true,
  //         },
  //       },
  //     },
  //   });

  //   try {
  //     console.log('IN try -=-=-=-=-=>');

  //     const linechart = new Chart('linechart', {
  //       type: 'line',
  //       data: this.lineData,
  //     });

  //     console.log('lineChart---->', linechart);
  //   } catch (error) {
  //     console.log('Error::', error);
  //   }
  // }

  renderChart() {
    const pieChart = new Chart('piechart', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    const barChart = new Chart('barchart', {
      type: 'bar',
      data: {
        datasets: [
          {
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });

    const lineChart = new Chart('linechart', {
      type: 'line',
      // data: this.lineData,
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      },
    });

    const doughnutchart = new Chart('doughnutchart', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }

  generateMonthLabels(count: number): string[] {
    const currentDate = new Date();

    return Array.from({ length: count }, (_, index) => {
      const monthDate = subMonths(currentDate, index);
      return format(monthDate, 'MMM');
    }).reverse();
  }
}
