import React from "react";
import { Route, Routes } from "react-router-dom";
import{
    CreateStudent,
    HomePage,
    StudentOutlet,
    Students,
    UpdateStudent,
    Todo,
} from "./pages";
import Test1 from "./pages/Test1";

const AppRoute: React.FC = () => {
    return(
        <Routes>
            <Route path="" element={<HomePage />}/>
            <Route path="student" element={<StudentOutlet />}>
              <Route path="" element={<Students />}/>
              <Route path="create-student" element={<CreateStudent />}/>
              <Route path="update-student/:studentID" element={<UpdateStudent />}/>
            </Route>
            <Route path="todo" element={<Todo />}/>
            <Route path="test1" element={<Test1/>}/>
        </Routes>
    );
};

export default AppRoute;