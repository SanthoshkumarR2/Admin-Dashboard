import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StudentList() {

    const [isLoading, SetLoading] = useState(true);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        //On Load
        getStudents();
        // console.log("welcome");
    }, [])

    let getStudents = async () => {
        try {
            const students = await axios.get("https://647c1c6dc0bae2880ad06371.mockapi.io/Students");
            setStudentList(students.data);
            // console.log(studentList);
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Student Table</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media4.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif' />
                            : <div className="table-responsive">
                                <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Student Name</th>
                                            <th>Standard</th>
                                            <th>Section</th>
                                            <th>Gender</th>
                                            <th>Class Co-Ordinator</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        {studentList.map((student) => {
                                            return (
                                                <tr>
                                                    <td>{student.Student_Name}</td>
                                                    <td>{student.Standard}</td>
                                                    <td>{student.Section}</td>
                                                    <td>{student.Gender}</td>
                                                    <td>{student.Class_Teacher}</td>
                                                    <td>
                                                        <Link to={`/student-portal/student-view/${student.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                                                    </td>
                                                </tr>)
                                        })

                                        }

                                    </tbody>
                                </table>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default StudentList