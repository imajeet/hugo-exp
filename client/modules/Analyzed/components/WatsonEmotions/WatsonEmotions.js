import React, { PropTypes, Component } from 'react';
import * as Recharts from 'recharts';

const { Cell, ResponsiveContainer, Line, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } = Recharts;

// const WatsonEmotions = (props) => {
class WatsonEmotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composedChartDimensions: {
        width: 0,
        height: 0,
      },
    };
    this.colors = [
      'rgb(83.5%, 0%, 0%)',
      'rgb(100%, 43.9%, 26.3%)',
      'rgb(72.5%, 96.5%, 79.2%)',
      'rgb(100%, 100%, 0%)',
      'rgb(70.2%, 53.3%, 100%)',
    ];
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (
        (window.innerWidth >= 320 && window.innerWidth <= 400)
        // ||
        // (window.innerWidth >= 320 && window.innerWidth <= 400)
      ) {
        this.setState({ // eslint-disable-line
          composedChartDimensions: {
            width: 310,
          },
        });
      } else {
        this.setState({ // eslint-disable-line
          composedChartDimensions: {
            width: 400,
          },
        });
      }
    });


    if (window.innerWidth >= 320 && window.innerWidth <= 400) {
      this.setState({ // eslint-disable-line
        composedChartDimensions: {
          width: 310,
        },
      });
    } else {
      this.setState({ // eslint-disable-line
        composedChartDimensions: {
          width: 400,
        },
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }


  render() {
    return (
      <ResponsiveContainer>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ComposedChart
            width={this.state.composedChartDimensions.width}
            height={300}
            data={this.props.emotions}
            margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
          >
            <XAxis dataKey="emotion" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="score">
              {
                this.props.emotions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={this.colors[index]} stroke={this.colors[index]} strokeWidth={index === 2 ? 4 : 1} />
                ))
              }
            </Bar>
            <Line dataKey="score">
              {
                this.props.emotions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={this.colors[index]} stroke={this.colors[index]} strokeWidth={index === 2 ? 4 : 1} />
                ))
              }
            </Line>
          </ComposedChart>
        </div>
      </ResponsiveContainer>
    );
  }
}

WatsonEmotions.propTypes = {
  emotions: PropTypes.array.isRequired,
};

export default WatsonEmotions;
