import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function TeacherStudentEdit() {
    const params = useParams();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        //On Load
        getStudents();
    }, [])

    let getStudents = async () => {
        try {
            const students = await axios.get(`https://647c1c6dc0bae2880ad06371.mockapi.io/Students/${params.id}`);
            myFormik.setValues(students.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const myFormik = useFormik({
        initialValues: {
            Student_Name: "",
            Father_Name: "",
            Standard: "",
            Section: "",
            Contact_Number: "",
            Class_Teacher: "",
            Gender: ""
        },
        validate: ((values) => {
            let errors = {}

            if (!values.Student_Name) {
                errors.Student_Name = "Please enter the Stduent name";
            } else if (values.Student_Name.length < 3) {
                errors.Student_Name = "Name shouldn't be less than 3 letters";
            } else if (values.Student_Name.length > 25) {
                errors.Student_Name = "Name shouldn't be more than 20 letters";
            }

            if (!values.Father_Name) {
                errors.Father_Name = "Please enter the Father's name";
            } else if (values.Father_Name.length < 3) {
                errors.Father_Name = "Name shouldn't be less than 3 letters";
            } else if (values.Father_Name.length > 25) {
                errors.Father_Name = "Name shouldn't be more than 20 letters";
            }

            if (!values.Standard) {
                errors.Standard = "Please enter the Standard which student is studying.";
            }

            if (!values.Section) {
                errors.Section = "Please enter the Section of Class";
            }

            if (!values.Contact_Number) {
                errors.Contact_Number = "Enter the Contact details of parent";
            } else if (values.Contact_Number.length > 11) {
                errors.Contact_Number = "Please enter 10 digit Contact Number";
            }

            if (!values.Class_Teacher) {
                errors.Class_Teacher = 'Please enter Class Co-ordinator for this student';
            }

            if (!values.Gender) {
                errors.Gender = "Please Select any one Gender";
            }

            return errors;
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://647c1c6dc0bae2880ad06371.mockapi.io/Students/${params.id}`, values);
                setLoading(false);
                navigate("/portal/teacher-details");
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    })

    return (
        <>
            <h4> Edit Student details - {myFormik.values.Student_Name}</h4>
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Student Name</label>
                            <input name='Student_Name' value={myFormik.values.Student_Name} onChange={myFormik.handleChange}
                                type={"text"} className={`form-control ${myFormik.errors.Student_Name ? "is-invalid" : ""}`} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.Student_Name} </span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Father Name</label>
                            <input name='Father_Name' value={myFormik.values.Father_Name} onChange={myFormik.handleChange}
                                type={"text"} className={`form-control ${myFormik.errors.Father_Name ? "is-invalid" : ""}`} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.Father_Name} </span>
                        </div>

                        <div className='col-lg-4'>
                            <label>Standard</label>
                            <input name='Standard' value={myFormik.values.Standard} onChange={myFormik.handleChange}
                                type={"text"} className={`form-control ${myFormik.errors.Standard ? "is-invalid" : ""}`} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.Standard}</span>
                        </div>

                        <div className='col-lg-4'>
                            <label>Section</label>
                            <select name='Section' value={myFormik.values.Section} onChange={myFormik.handleChange}
                                className={`form-control ${myFormik.errors.Section ? "is-invalid" : ""} `}>
                                <option value={""}>-----Select-----</option>
                                <option value={"A"}>A</option>
                                <option value={"B"}>B</option>
                                <option value={"C"}>C</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.Section}</span>
                        </div>

                        <div className='col-lg-4'>
                            <label>Gender</label>
                            <select name='Gender' value={myFormik.values.Gender} onChange={myFormik.handleChange}
                                className={`form-control ${myFormik.errors.Gender ? "is-invalid" : ""} `}>
                                <option value={""}>----Select----</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.Gender}</span>
                        </div>

                        <div className='col-lg-6'>
                            <label>Contact_Number</label>
                            <input name='Contact_Number' value={myFormik.values.Contact_Number} onChange={myFormik.handleChange}
                                type={"number"} className={`form-control ${myFormik.errors.Contact_Number ? "is-invalid" : ""}`}>
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.Contact_Number}</span>
                        </div>

                        <div className='col-lg-6'>
                            <label>Class Co-ordinator</label>
                            <input name='Class_Teacher' value={myFormik.values.Class_Teacher} onChange={myFormik.handleChange}
                                type={"text"} className={`form-control ${myFormik.errors.Class_Teacher ? "is-invalid" : ""}`}>
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.Class_Teacher}</span>
                        </div>

                        <div className='col-lg-4 mt-3'>
                            <input disabled={isLoading} type="submit" value={isLoading ? "Updating..." : "Update"} className=' btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TeacherStudentEdit