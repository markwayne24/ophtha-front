import React, { Component } from 'react';
import { Breadcrumb, Table, Icon } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
            <a href="">Action 一 {record.name}</a>
            <span className="ant-divider" />
            <a href="">Delete</a>
            <span className="ant-divider" />
            <a href="" className="ant-dropdown-link">
                More actions <Icon type="down" />
            </a>
            </span>
        ),
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }
];

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Appointments</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}

export default Dashboard;