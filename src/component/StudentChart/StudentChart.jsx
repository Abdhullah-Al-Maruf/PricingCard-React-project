import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const studentData = [
    {
        name: "Rahim",
        math: 85,
        english: 78,
        science: 92,
    },
    {
        name: "Karim",
        math: 70,
        english: 88,
        science: 75,
    },
    {
        name: "Ayesha",
        math: 95,
        english: 90,
        science: 93,
    },
    {
        name: "Nusrat",
        math: 60,
        english: 72,
        science: 68,
    },
    {
        name: "Siam",
        math: 80,
        english: 65,
        science: 85,
    },
];



const StudentChart = () => {
    return (
        <>


            <div className='w-[90%] mx-auto h-75'>
                <ResponsiveContainer>
                    <LineChart width={800} height={300} data={studentData}>

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>

                        <Line dataKey="math" stroke="#8884d8" />
                        <Line dataKey="english" stroke="#686858" />
                        <Legend />
                    </LineChart>

                </ResponsiveContainer>

            </div>

            <div className='w-[90%] mx-auto h-75'>
                <ResponsiveContainer>

                    <BarChart data={studentData}>

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="english" fill='green' />
                        <Bar dataKey="math" fill='yellow' />
                        <Bar dataKey="science" fill='red' />

                        <Legend />



                    </BarChart>
                </ResponsiveContainer>
            </div>



            <div className='w-[90%] mx-auto h-75'>
                <ResponsiveContainer>
                    <PieChart  >


                        <Pie data={studentData}

                            dataKey="math"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill='green'
                            label

                        />

                        <Legend />
                        
                        <Tooltip />




                    </PieChart>


                </ResponsiveContainer>
            </div>

        </>

    );
};

export default StudentChart;