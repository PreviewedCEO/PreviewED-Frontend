import React from "react";
import { Table } from "antd";

const Payments = () => {
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
  ];

  const data = [
    {
      key: "1",
      transactionId: "TXN0001",
      user: "John Doe",
      date: "01/01/2022",
      amount: "$100",
      paymentMethod: "Credit Card",
    },
    {
      key: "2",
      transactionId: "TXN0002",
      user: "Jane Smith",
      date: "02/01/2022",
      amount: "$200",
      paymentMethod: "PayPal",
    },
    {
      key: "3",
      transactionId: "TXN0003",
      user: "Bob Johnson",
      date: "03/01/2022",
      amount: "$150",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div>
      <h1>Payments</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Payments;
