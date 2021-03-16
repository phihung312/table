import React, { useState } from 'react';
import { Table, Button, Input, DatePicker, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Name of ${i}`,
    age: 23,
    address: `Q5,TPHCM.`,
  });
} // rowSelection object indicates the need for row selection

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

export const Demo = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div>
            <div style={{ display: 'flex', height: 50, backgroundColor: 'black' }}>
                <div style={{ color: 'white', fontSize: '24px', left: "10px", position: 'absolute' }}>Construction estimation</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <PoweroffOutlined style={{ cursor: 'pointer', fontSize: '25px', color: 'white', marginTop: '10px', marginRight: '30px' }} /> </div>
            </div>
            <div style={{ display: 'flex', height: 60, margin: '0px 20px 0px 20px' }}>
                <Button style={{ width: '200px', height: '35px', margin: '10px 0px 5px 10px' }} type="primary" block>ADD</Button>
                <Button style={{ width: '200px', height: '35px', margin: '10px 0px 5px 10px' }} block > DEL</Button>
                <Input style={{ width: '200px', height: '35px', margin: '10px 0px 5px 100px' }} placeholder="Basic usage" />
                <Input style={{ width: '200px', height: '35px', margin: '10px 0px 5px 20px' }} placeholder="Basic usage" />
                <DatePicker style={{ width: '150px', height: '35px', margin: '10px 0px 5px 20px' }} />
            </div>
            <Table
                style={{ height: '100vh', margin: '0px 20px 0px 20px' }}
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                pagination={{ pageSize: 10 }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
