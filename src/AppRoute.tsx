import React from "react";
import { Route, Routes } from "react-router-dom";
import{
    CreateStudent,
    HomePage,
    StudentOutlet,
    Students,
    UpdateStudent,
    Todo,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6
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
              <Route path="Test2" element={<Test2 />}/>
              <Route path="Test3" element={<Test3 />}/>
              <Route path="Test4" element={<Test4 />}/>
              <Route path="Test5" element={<Test5 />}/>
              <Route path="Test6" element={<Test6 />}/>
            </Route>
            <Route path="todo" element={<Todo />}/>
            <Route path="test1" element={<Test1/>}/>
        </Routes>
    );
};

export default AppRoute;