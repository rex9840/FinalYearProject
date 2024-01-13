import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { year: 2020, class7: 70, class8: 60, class9: 90, class10: 99 },
  { year: 2021, class7: 59, class8: 95, class9: 75, class10: 60 },
  { year: 2022, class7: 90, class8: 60, class9: 32, class10: 40 },
  { year: 2023, class7: 35, class8: 78, class9: 55, class10: 99 },
];

const classColors = {
  class7: "blue",
  class8: "purple",
  class9: "red",
  class10: "green",
};

const ResultChart = () => {
  return (
    <ResponsiveContainer width="100%" height={360} style={{ marginTop: 12 }}>
      <BarChart
        data={chartData}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        {/* Chart Title             */}
        <text x="20" y="20" fontSize="24" fontWeight="bold" fill="#333">
          Result (Passed)
        </text>

        {/* Grid Lines for Readability  */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* X-axis representing years */}
        <XAxis dataKey="year" />

        {/* Y-axis representing values */}
        <YAxis />

        {/* Interactive tooltips for data points */}
        <Tooltip />

        {/* Chart legend for class labels */}
        <Legend verticalAlign="top" height={36} />
        {/* Render individual bars for each line  */}

        {Object.keys(classColors).map((className) => (
          <Bar
            key={className}
            dataKey={className}
            fill={classColors[className]}
            name={`Class ${className.slice(5)}`}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ResultChart;
