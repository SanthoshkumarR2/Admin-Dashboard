import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className='container login'>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0" id='loginuser'>
                            {/* <!-- Nested Row within Card Body --> */}
                            <h1 className='text-center mt-4'>
                                <b style={{ color: "#51091E" , textShadow: "2px 2px 5px #00aaaa", fontFamily: "cursive"}}>Admin Dashboard</b>
                            </h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4"><b>Student Login!</b></h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter your Roll No..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="studentCheck" />
                                                    <label className="custom-control-label" htmlFor="studentCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <Link to="/student-portal/student-dashboard" className="btn btn-primary btn-user btn-block" style={{ fontSize: "1rem" }}>
                                                Login
                                            </Link>
                                            <hr />
                                        </form>
                                        <div className="text-center">
                                            <a className="medium" href="forgot-password.html"><mark style={{ color: "red" }}>Forgot Password?</mark></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4"><b style={{textDecoration: "underline"}}>Teacher Login!</b></h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmailteach" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPasswordteach" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="teacherCheck" />
                                                    <label className="custom-control-label" htmlFor="teacherCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <Link to="/portal/teacher-dashboard" className="btn btn-primary btn-user btn-block button-login" style={{ fontSize: "1rem" }}>
                                                Login
                                            </Link>
                                            <hr />
                                        </form>
                                        <div className="text-center">
                                            <a className="medium" href="forgot-password.html"><mark style={{ color: "red" }}>Forgot Password</mark></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
 )
}

export default Login