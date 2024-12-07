import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class WeightHistoryChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weightHistory: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/get-weight-history', {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.weight_history) {
          this.setState({
            weightHistory: data.weight_history.map((entry) => ({
              date: new Date(entry.date).toLocaleDateString(),
              weight: entry.weight,
            })),
            isLoading: false,
          });
        } else {
          this.setState({ error: 'No weight history found', isLoading: false });
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        this.setState({ error: `Error fetching weight history: ${error.message}`, isLoading: false });
      });
  }

  render() {
    const { weightHistory, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={weightHistory}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default WeightHistoryChart;