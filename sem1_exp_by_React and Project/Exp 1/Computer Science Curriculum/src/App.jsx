import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Computer Science Curriculum</h1>

      {/* Name Section */}
      <div className="name-box">
        <h2>Created By: Prachi Choudhary</h2>
      </div>

      <h2>Course Overview</h2>

      <p>
        This <b>program</b> provides <i>fundamental knowledge</i> and{" "}
        <u>practical skills</u> in computing.
      </p>

      <p>Special characters: &lt; &gt; &amp; &quot; ©</p>

      <h3>Year Structure</h3>
      <ol>
        <li>
          <b>First Year</b> - Foundation
        </li>
        <li>
          <i>Second Year</i> - Core Programming
        </li>
        <li>
          <u>Third Year</u> - Advanced Topics
        </li>
      </ol>

      <h3>Core Subjects</h3>
      <ul>
        <li>
          <b>Programming Languages</b>
        </li>
        <li>
          <i>Data Structures</i>
        </li>
        <li>
          <u>Database Management</u>
        </li>
      </ul>

      <hr />

      <p>
        <small> 2025 CSE Department</small>
      </p>
    </div>
  );
}

export default App;