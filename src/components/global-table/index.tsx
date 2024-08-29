// import React from 'react';
// import { Table as AntdTable } from 'antd';
// import type { TableColumnsType, TablePaginationConfig } from 'antd';

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// interface CustomTableProps {
//   data: DataType[];
//   pagination: TablePaginationConfig;
//   onChange: (pagination: TablePaginationConfig) => void;
// }

// const columns: TableColumnsType<DataType> = [
//   { title: 'Name', dataIndex: 'name', key: 'name' },
//   { title: 'Age', dataIndex: 'age', key: 'age' },
//   { title: 'Address', dataIndex: 'address', key: 'address' },
// ];

// const Table: React.FC<CustomTableProps> = ({ data, pagination, onChange }) => {
//   return (
//     <AntdTable
//       columns={columns}
//       dataSource={data}
//       pagination={pagination}
//       onChange={(pagination) => onChange(pagination)}
//       rowKey="key"
//       bordered
//     />
//   );
// };

// export default Table;

import React from 'react';
import { Table as AntdTable } from 'antd';
import type { TableColumnsType, TablePaginationConfig } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface CustomTableProps {
  data: DataType[];
  pagination: TablePaginationConfig;
  onChange: (pagination: TablePaginationConfig) => void;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const Table: React.FC<CustomTableProps> = ({ data, pagination, onChange }) => {
  return (
    <AntdTable
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={(pagination) => onChange(pagination)}
      rowKey="key"
      bordered
    />
  );
};

export default Table;

