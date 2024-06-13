import React from 'react';
import { Table, Tag, Avatar, Space, Button } from 'antd';
import approvals from './approvals.json';
import format from './format.json'


const approvalsData = approvals.data;

const arr = ["Expense", "Travel", "Loan", "Leave", "Asset", "Salary", "Payroll", "Expense Financers", "Travel Agent", "Reward", "Resignation Hr", "Resignation Admin", "Resignation It", "Resignation Finance", "Resignation Exit", "Requisition", "Warning", "Complain", "Bonus", "Promotion", "request for Item", "CustomApproval", "Form", "Document", "Career", "Requisition Final Approval", "request for Item Asset Controller", "Quotation", "Quotation Client", "Appraisal", "Aution", "Attendance"];

approvalsData.map(e => {
  e.type = arr[e.type - 1] 
});

console.log(approvalsData);

approvalsData.forEach(e => {
  if (format[e.type]) { 
    format[e.type].push({ name: e.member.name, image: e.member.image });
  } else {
    console.log(`Type ${e.type} is not defined in format or is not an array.`);
  }
});

console.log(format);

const data = Object.keys(format).map(key => ({
  key,
  members: format[key].map(e => ({
    name: e.name,
    image: e.image
  }))
}));

console.log(data);

const columns = [
  {
    title: 'Name',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Members',
    dataIndex: 'members',
    key: 'members',
    render: (members) => (
      <Space size="middle">
        {members.map((member, index) => (
          <Tag key={index} closeIcon>
            {console.log((member.name).type)}
            <Avatar
              src={member.image !== "" ? member.image : undefined}
              size="small"
            />
            {member.name}
          </Tag>
        ))}
        <Button type='primary' shape='circle'>+</Button>
      </Space>
    ),
  },
];



const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <Table columns={columns} dataSource={data} scroll={{ y: 2000 }} />
    </div>
  );
};

export default App;