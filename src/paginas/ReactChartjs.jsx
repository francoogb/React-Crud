import { Link } from "react-router-dom";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

//https://www.npmjs.com/package/react-chartjs-2
//https://www.chartjs.org/docs/latest/getting-started/
const ReactChartjs = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

  // Datos para el gráfico de pastel
  const pieData = {
    labels: ["PHP", "Python", "JavaScript", "C++", "Ruby", "Go"],
    datasets: [
      {
        label: 'Número de Desarrolladores',
        data: [1200, 5501, 6200, 2300, 1500, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(124, 252, 0, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(124, 252, 0, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} desarrolladores`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Datos para el gráfico de barras
  const barData = {
    labels: ['Chile', 'Argentina'],
    datasets: [
      {
        label: 'Participaciones en Mundiales',
        data: [9, 17], // Cambia estos datos según la cantidad de mundiales
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Color para Chile
          'rgba(255, 159, 64, 0.6)', // Color para Argentina
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} participaciones`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Chart Js
          </li>
        </ol>
      </nav>

      <h1>Estadísticas de Lenguajes de Programación</h1>

      <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
        <Pie data={pieData} options={pieOptions} />
      </div>

      <h1>Comparación de Participaciones en Mundiales</h1>

      <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
        <Bar data={barData} options={barOptions} />
      </div>
    </>
  );
};

export default ReactChartjs;
