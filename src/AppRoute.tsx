import React from "react";
import { Route, Routes } from "react-router-dom";
import{
    CreateStudent,
    HomePage,
    StudentOutlet,
    Students,
    UpdateStudent,
} from "./pages";

const AppRoute: React.FC = () => {
    return(
        <Routes>
            <Route path="" element={<HomePage />}/>
            <Route path="student" element={<StudentOutlet />}>
              <Route path="" element={<Students />}/>
              <Route path="create-student" element={<CreateStudent />}/>
              <Route path="update-student/:studentID" element={<UpdateStudent />}/>
            </Route>
        </Routes>
    );
};

export default AppRoute;