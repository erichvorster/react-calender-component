import Calendar from "./Calender";
import Table from "./Table";

function App() {
  const title = "My Table";
  const columns = ["Name", "Age", "Country"];
  const data = [
    { Name: "John", Age: 25, Country: "USA" },
    { Name: "Jane", Age: 30, Country: "Canada" },
    { Name: "Bob", Age: 45, Country: "Mexico" },
  ];

  return (
    <>
      <Calendar />
      <Table title={title} columns={columns} data={data} />
    </>
  );
}

export default App;
