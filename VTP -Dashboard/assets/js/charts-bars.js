/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const barConfig = {
  type: 'bar',
  data: {
    labels: ['VTB 2021 Yaz', 'VTB 2021 Qış', 'VTB 2022 Yaz', 'VTB 2021 Payız', 'VTB 2022 Qış'],
    datasets: [
      {
        label: 'Qeydiyyat',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [1000, 900, 780, 850, 500],
      },
      {
        label: 'Seçilən',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [250, 200,180, 150, 150],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)
