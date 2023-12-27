import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TeacherList() {

  const [isLoading, SetLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    //On Load
    getStudents();
  }, [])

  let getStudents = async () => {
    try {
      const students = await axios.get("https://647c1c6dc0bae2880ad06371.mockapi.io/Students");
      setStudentList(students.data);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the Student from the List");
      if (confirmDelete) {
        await axios.delete(`https://647c1c6dc0bae2880ad06371.mockapi.io/Students/${id}`);
        getStudents();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Student List</h1>
        <Link to="/portal/create-student" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUserGraduate} className="creatinguser mr-2" />
          Add New Student
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Student Database</h6>
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
                  <tfoot>
                    <tr>
                      <th>Student Name</th>
                      <th>Standard</th>
                      <th>Section</th>
                      <th>Gender</th>
                      <th>Class Co-Ordinator</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
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
                            <Link to={`/portal/teacher-view/${student.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                            <Link to={`/portal/teacher-edit/${student.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                            <button onClick={() => { handleDelete(student.id) }} className='btn btn-danger btn-sm mr-1'>Delete</button>
                          </td>
                        </tr>
                      )
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

export default TeacherList