import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Portal({ isTeacher, name }) {
    const isLink = isTeacher
        ? {
            dashboardLink: "/portal/teacher-dashboard",
            detailsLink: "/portal/teacher-details",
        }
        : {
            dashboardLink: "/student-portal/student-dashboard",
            detailsLink: "/student-portal/student-details",
        }
        ;
    return (
        <>
            <div id="wrapper">
                <SideBar isLink={isLink} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar name={name} />
                        <div className="container-fluid">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portal;