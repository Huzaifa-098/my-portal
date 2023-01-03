import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
function TableComponent() {
  const [modal, setmodal] = useState(false);
  return (
    <>
      <div
        className="center"
        style={{ display: "flex", justifyContenet: "center" }}
      >
        <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
          <ModalHeader toggle={() => setmodal(!modal)}>PopUP</ModalHeader>
          <ModalBody>
            <form>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor="name">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor="name">First_Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First_Name"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor="name">Last_Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last_Name"
                    />
                  </div>
                </Col>
              </Row>
              <button className="btn mt-3" style={{ backgroundColor: "green" }}>
                Submit
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
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
                <b>View</b>
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
                <TableCell align="center">
                  {row.Email}
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    style={{ width: "60px" }}
                    onClick={() => setmodal(true)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    style={{ width: "60px" }}
                    onClick={() => setmodal(true)}
                  >
                    ADD
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => setmodal(true)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const tableData = [
  {
    id: 1,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 2,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 3,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 4,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 5,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 6,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 7,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 8,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 9,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
  {
    id: 10,
    First_Name: "Huzaifa ",
    Last_Name: "Tariq",
    Email: "",
  },
];

export default TableComponent;
