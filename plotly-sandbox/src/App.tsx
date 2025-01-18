import {useEffect, useState} from 'react'
import Plot from "react-plotly.js";

interface ChartData {
    x: number[];
    y: number[];
}

interface MapData {
    map: number[];
}

const App: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [mapData, setMapData] = useState<MapData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8001/random-data?num_points=30");
            const data = await response.json();
            setChartData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8000/map");
            const data = await response.json();
            setMapData(data)
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
                            marker: {color: "blue"},
                        },
                    ]}
                    layout={{
                        title: "Example Plot",
                        xaxis: {title: "X-Axis"},
                        yaxis: {title: "Y-Axis"}
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
            <h1>Perlin Noise Map</h1>
            {mapData ? (
                <Plot
                    data={[
                        {
                            z: mapData.map,
                            type: "heatmap",
                            colorscale: [
                                [0, "white"],
                                [1, "black"],
                            ],
                            showscale: false,
                        },
                    ]}
                    layout={{
                        title: "Perlin Plot",
                    }}
                />
            ) : (
                <p>Generating...</p>
            )}
        </div>
    );
};

export default App
