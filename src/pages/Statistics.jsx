// import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from 'recharts';
// import { PieChart, Pie, Tooltip } from 'recharts';



const Statistics = () => {
    const data = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
            cnt: 490,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
            cnt: 590,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
            cnt: 350,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
            cnt: 480,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
            cnt: 460,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
            cnt: 380,
        },
    ];
    // const students = [
    //     { name: "Alice", age: 18 },
    //     { name: "Bob", age: 19 },
    //     { name: "Charlie", age: 17 },
    //     { name: "David", age: 18 },
    //     { name: "Evelyn", age: 20 },
    //     { name: "Frank", age: 19 },
    //     { name: "Grace", age: 18 },
    //     { name: "Hannah", age: 17 },
    //     { name: "Isaac", age: 20 },
    //     { name: "Jack", age: 19 }
    // ];
    return (
        <div className='w-full'>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
        </div>



        // <div>
        //     <PieChart width={400} height={400}>
        //         <Pie
        //             dataKey="age"
        //             isAnimationActive={false}
        //             data={students}
        //             cx="50%"
        //             cy="50%"
        //             outerRadius={80}
        //             fill="#8884d8"
        //             label
        //         />
        //         <Tooltip />
        //     </PieChart>
        // </div>
    );

};

export default Statistics;