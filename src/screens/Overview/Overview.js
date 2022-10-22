import React from 'react';
import MyTable from '../../components/Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tableData, headerData } from '../../utils/Constants';
import defaultColumnFilter from '../../components/DefaultFilter';

function Overview() {
  const data = tableData;
  const columns = [
    {
      Header: 'STT',
      accessor: 'id',
      Filter: defaultColumnFilter,
      Filter: false,
    },
    {
      Header: 'Địa điểm',
      accessor: 'Dia_diem',
    },
    {
      Header: 'Trạng thái',
      accessor: 'Trang_thai',
      Filter: false,
    },
    {
      Header: 'Lượng mưa ngày',
      accessor: 'Theo_ngay',
      Filter: false,
    },
    {
      Header: 'Lượng mưa đêm',
      accessor: 'Theo_dem',
      Filter: false,
    },
    {
      Header: 'Tổng lượng mưa',
      accessor: 'Tong',
      Filter: false,
    },
    {
      Header: 'Thời gian cập nhật',
      accessor: 'Time',
      Filter: false,
    },
    {
      Header: 'Chi tiết',
      accessor: 'xem',
      Filter: false,
    },
  ];
  return <MyTable columns={columns} data={data} />;
}

export default Overview;
