'use client';

import {LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend} from 'recharts';


const pageData = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page C',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page D',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page E',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page F',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page G',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];


export default function Page() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={pageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )
}
