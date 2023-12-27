import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function StudentView() {
    const params = useParams();
    const [isLoading, SetLoading] = useState(true);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        //On Load
        getStudent();
    }, [])

    let getStudent = (async () => {
        try {
            const student = await axios.get(`https://647c1c6dc0bae2880ad06371.mockapi.io/Students/${params.id}`);
            setStudentList(student.data);
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <Link to="/student-portal/student-details" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon icon={faBackward} className="creatinguser mr-2" />
                    Back
                </Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-success"> Details of Student : {studentList.Student_Name}</h5>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media4.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif' />
                            :
                            <div className='container'>
                                <div className='row'>
                                    <div className='col lg-6'>
                                        <div className="table-responsive">
                                            <table className="table table-bordered text-center" id="dataTable" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Student Name</th>
                                                        <th>Standard</th>
                                                        <th>Section</th>
                                                        <th>Gender</th>
                                                        <th>Father's Name</th>
                                                        <th>Contact Number</th>
                                                        <th>Class Co-ordinator</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{studentList.Student_Name}</td>
                                                        <td>{studentList.Standard}</td>
                                                        <td>{studentList.Section}</td>
                                                        <td>{studentList.Gender}</td>
                                                        <td>{studentList.Father_Name}</td>
                                                        <td>{studentList.Contact_Number}</td>
                                                        <td>{studentList.Class_Teacher}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='col lg-6'>
                                    <h3>Marks Obatined</h3>
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Tamil</th>
                                                    <th>English</th>
                                                    <th>Maths</th>
                                                    <th>Physics</th>
                                                    <th>Chemistry</th>
                                                    <th>Computer Science</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>85</td>
                                                    <td>70</td>
                                                    <td>95</td>
                                                    <td>90</td>
                                                    <td>86</td>
                                                    <td>88</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default StudentView