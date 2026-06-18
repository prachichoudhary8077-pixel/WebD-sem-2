import "./App.css";

function App() {
  return (
    <div>

      {/* Fixed Name Box */}
      <div className="name-box">
        <h2>Created By: Prachi Choudhary</h2>
      </div>

      <div className="container">

        <h1>ABC College</h1>
        <h2>B.Tech 2nd Year - Weekly Timetable</h2>

        <table>
          <caption>
            <b>Class Timetable</b>
          </caption>

          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <th>9:00–10:00</th>

              <td rowSpan="2">
                Database <br />
                Lecture
              </td>

              <td>Maths</td>
              <td>Physics</td>
              <td>English</td>
              <td>Chemistry</td>
            </tr>

            <tr>
              <th>10:00–11:00</th>

              <td rowSpan="2">Maths Lab</td>

              <td>Physics</td>
              <td>English</td>
              <td>Sports</td>
            </tr>

            <tr>
              <th>11:00–12:00</th>

              <td>Computer Networks</td>

              <td colSpan="2">Database Lab</td>

              <td>Library</td>
            </tr>

            <tr>
              <th>12:00–1:00</th>

              <td colSpan="5" className="lunch">
                <b>Lunch Break</b>
              </td>
            </tr>

            <tr>
              <th>1:00–2:00</th>

              <td>AI</td>
              <td>Maths</td>

              <td rowSpan="2">Project Work</td>

              <td>Computer Networks</td>
              <td>Workshop</td>
            </tr>

            <tr>
              <th>2:00–3:00</th>

              <td colSpan="2">Elective Subject</td>

              <td colSpan="2">

                {/* Nested Table */}
                <table className="nested-table">
                  <caption>
                    <b>Lab Details</b>
                  </caption>

                  <thead>
                    <tr>
                      <th>Lab</th>
                      <th>Instructor</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Lab 1</td>
                      <td>Dr. Sharma</td>
                    </tr>
                  </tbody>

                </table>

              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;