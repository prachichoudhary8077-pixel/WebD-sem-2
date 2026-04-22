function StudentList() {
  const students = ["Rahul", "Amit", "Neha"];

  return (
    <ul>
      {students.map((s, index) => (
        <li key={index}>{s}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Students</h1>
      <StudentList />
    </div>
  );
}

export default App;