import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function Balance() {
    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Transaction History</h4>
                    </div>
                    <div>
                        <h5>Transactions</h5>
                    </div>
                </div>
                <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="150%">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Credited" stackId="a" fill="green" />
                        <Bar dataKey="Debited" stackId="a" fill="red" />
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default Balance
const data = [
    {
      name: 'January',
      Credited: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      Credited: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      Credited: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      Credited: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      Credited: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      Credited: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      Credited: 3490,
      pv: 4300,
      amt: 2100,
    },
{
    name: 'August',
    Credited: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'September',
    Credited: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'October',
    Credited: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'November',
    Credited: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    Credited: 2490,
    pv: 1300,
    amt: 2000,
  },



  ];
const Section = styled.section`
.sales{
    color: black;
    width: 100%;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
        }
    }
}

`;