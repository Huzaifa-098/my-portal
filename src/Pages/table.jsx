import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

const table = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "200px",
        display: "flex",
        justifyContent: "center",

        maxHeight: "310px",
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>id</b>
            </TableCell>
            <TableCell>
              <b>First_Name</b>
            </TableCell>
            <TableCell>
              <b>Last_Name</b>
            </TableCell>
            <TableCell align="center">
              <b>Edit</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.First_Name}</TableCell>
              <TableCell>{row.Last_Name}</TableCell>
              <TableCell align="center">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 2,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 3,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 4,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 5,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 6,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 7,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 8,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 9,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
  {
    id: 10,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "...",
  },
];

export default table;
