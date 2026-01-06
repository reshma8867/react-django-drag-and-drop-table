
import { useEffect, useState } from "react";
import StudentTable from "./StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Drag & Drop Students
      </h2>

      <StudentTable
        students={students}
        setStudents={setStudents}
      />
    </div>
  );
}

export default App;
