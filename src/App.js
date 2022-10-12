import './App.css';
import Table from 'rc-table';

function App() {
  const columns = [
    {
      title: 'Số thứ tự',
      dataIndex: 'stt',
      key: 'stt',
      width: 100,
    },
    {
      title: 'Địa điểm',
      dataIndex: 'location',
      key: 'location',
      width: 200,
    },
    {
      title: 'Trạng thái thời tiết',
      dataIndex: 'state',
      key: 'state',
      width: 200,
    },
    {
      title: 'Lượng mưa',
      
      width: 200,
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 200,
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Details</a>,
    },
  ];

  const data = [
    { stt: '1', location: 'FPT', state: 'không mưa', updateTime: '5', key: '1' },
    { stt: '2', location: 'BKDN', state: 'không mưa', updateTime: '5', key: '2' },
  ];
  return (
    <div className="App">
      <Table className='rainTable'columns={columns} data={data} />
    </div>
  );
}

export default App;
