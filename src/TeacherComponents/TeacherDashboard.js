import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import Card from '../Components/Card'
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function TeacherDashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800"> Welcome, Tutor...!</h1>
            </div>
            <div className="row">
                <Card name="Teacher Name" value='ManiKandan' color="primary" />
                <Card name="Co-ordinator for" value="Online Class" color="success" />
                <Card name="Feild" value="IT" color="info" />
                <Card name="Department" value="FSD MERN" color="danger" />
            </div>
            <div className='row'>
                <div className='col xl-4 lg-4' style={{ width: "50%" }}>
                    <h3>List of Classes</h3>
                    <div className='table-responsive' >
                        <table className="table table-bordered text-center" id="dataTable" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VI</td>
                                    <td>Science</td>
                                </tr>
                                <tr>
                                    <td>X</td>
                                    <td>Science</td>
                                </tr>
                                <tr>
                                    <td>XI</td>
                                    <td>Physics</td>
                                </tr>
                                <tr>
                                    <td>XII</td>
                                    <td>Physics</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col xl-6 lg-8'>
                        <h4> Student's Pass Percentage based on Class</h4>
                        <Doughnut
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Pass Percentage (in %) Out of 100'
                                    }
                                }
                            }}
                            data={{
                                labels: [
                                    'VI',
                                    'X',
                                    'XI',
                                    'XII'
                                ],
                                datasets: [{
                                    data: [75, 80, 90, 95],
                                    backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'lightgreen',
                                        'rgba(255, 206, 86)'
                                    ],
                                    hoverOffset: 4
                                }]
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherDashboard