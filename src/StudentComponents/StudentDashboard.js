import React from 'react'
import { Line } from 'react-chartjs-2'
import Card from '../Components/Card'
import {
    Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Colors
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function StudentDashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Welcome</h1>
            </div>
            <div className="row">
                <Card name="Student Name" value='SanthoshKumar' color="primary" />
                <Card name="Standard" value="BSC CS" color="success" />
                <Card name="Class Coordinator" value="Mani" color="info" />
                <Card name="Attendance(in%)" value="85%" color="success" />
            </div>
            <div className='row'>
                <div className='col lg-6'>
                    <Line options={{
                        scales: {
                            y: {
                                min: 0,
                                max: 100,
                                ticks: {
                                    stepSize: 10,
                                },
                            },
                        },
                        responsive: true,
                        plugins: {
                            legend:
                            {
                                position: 'top',
                            },
                            title:
                            {
                                display: true,
                                text: 'Exam Marks( in %)',
                            },
                        },
                    }}
                        data={{
                            labels: ['Tamil', 'English', 'Maths', 'Physics', 'Chemistry', 'ComputerScience'],
                            datasets: [{
                                label: 'Quarterly',
                                data: [85, 70, 95, 90, 86, 88],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },
                            {
                                label: 'Half-Yearly',
                                data: [88, 78, 92, 74, 90, 78],
                                fill: false,
                                borderColor: 'rgb(255, 99, 132)',
                                tension: 0.1
                            }
                            ]
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default StudentDashboard