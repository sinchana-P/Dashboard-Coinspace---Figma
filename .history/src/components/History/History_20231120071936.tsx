import { Card, List, Divider, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';

import './History.css'

export const History = () => {

  interface DataType {
    key: string;
    date: string;
    detail: string;
    price: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      date: '2018/10/02 10:57:46',
      detail: 'Deposit Japanese Yen',
      price: '+10,000 JPY',
    },
    {
      key: '2',
      date: '2018/10/10 10:57:46',
      detail: 'Bought Bitcoin',
      price: '+0.00018147 BTC',
    },
    {
      key: '3',
      date: '2018/10/10 10:57:46',
      detail: 'Service fee',
      price: '-500 JPY',

    },
    {
      key: '4',
      date: '2018/10/02 10:57:46',
      detail: 'Deposit Japanese Yen',
      price: '+10,000 JPY',
    },
    {
      key: '5',
      date: '2018/10/10 10:57:46',
      detail: 'Bought Bitcoin',
      price: '+0.00018147 BTC',
    },
    {
      key: '6',
      date: '2018/10/10 10:57:46',
      detail: 'Service fee',
      price: '-500 JPY',

    }
  ];


  return (
    div
  )
}

