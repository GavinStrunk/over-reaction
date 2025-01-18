import { useEffect, useState } from 'react'
import Plot from "react-plotly.js";

interface ChartData {
  x: number[];
  y: number[];
}

const App: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/random-data?num_points=30");
      const data = await response.json();
      console.log(data)
      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Plotly Chart</h1>
      {chartData ? (
        <Plot
          data={[
            {
              x: chartData.x,
              y: chartData.y,
              type: "scatter", 
              mode: "lines+markers",
              marker: { color: "blue"},
            },
          ]}
          layout={{
            title: "Example Plot",
            xaxis: { title: "X-Axis"},
            yaxis: { title: "Y-Axis"}
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App
