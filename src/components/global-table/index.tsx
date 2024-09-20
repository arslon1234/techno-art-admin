import { Table as AntdTable } from 'antd';
import type { TablePaginationConfig } from 'antd';

interface CustomTableProps {
  data: any[];
  pagination: TablePaginationConfig;
  onChange: (pagination: TablePaginationConfig) => void;
  columns: any[]
}

const Table = ({ data, pagination, onChange,columns }:CustomTableProps) => {
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

