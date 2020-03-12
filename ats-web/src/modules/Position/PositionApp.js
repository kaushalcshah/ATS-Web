import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import Position from './Position';
import { Button } from 'antd';
import DataTable from '../../components/shared/dataTable';
import * as positionApi from '../../api/positionApi';
import PositionModel from './PositionModel';
import {Popconfirm} from 'antd';

const deletePosition = (del) => {
  //TO DO: Call API to delete position
  console.log(del.key);
}

function PositionApp() {
  const [positions, setPositions] = useState([new PositionModel()]);
  const [position, setPosition] = useState(new PositionModel());
  const [showPosition, setShowPosition] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const closeModal = () => {
    setShowPosition(false);
  }

  const getPosition = (id, isDisabled = false) => {
    async function fetchPosition(id) {
      const _position = await positionApi.getPosition(id);
      setPosition(_position);
      setIsDisabled(isDisabled);
      setShowPosition(true);
    }
    fetchPosition(id);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record = new PositionModel()) => (
        <span>
          <a onClick={() => getPosition(record.id, true)}>{text}</a>
        </span>
      ),
    },
    {
      title: 'Required Experience',
      dataIndex: 'experience',
      key: 'experience',
    },
    {
      title: 'No. of Positions',
      dataIndex: 'no_of_openings',
      key: 'no_of_openings',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      key: 'skills',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record = new PositionModel()) => (
        <span>
          <a onClick={() => getPosition(record.id)}>Edit</a>
          <Divider type="vertical" />
          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => {deletePosition(record);}}>
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  function deletePosition(record){
    const deletePosition = async (record) => {
      const _position = await positionApi.deletePosition(record.id);
      window.location.reload(false);
    };
    deletePosition(record);
  };
  useEffect(() => {
    async function fetchPositions() {
      const _positions = await positionApi.getPositions();
      setPositions(_positions);
      setisLoading(false);
    }
    fetchPositions();
  }, []);

  return (

    <div>
      <Button type="primary" onClick={() => {
        let position = new PositionModel();
        delete position.id;
        setPosition(position);
        setShowPosition(true);
        setIsDisabled(false);
      }}>
        Add Position
      </Button>
      <hr></hr>
      {!isLoading && <DataTable columns={columns} dataSource={positions} rowKey="id" />}
      {showPosition ? <Position onCloseModal={closeModal} {...position} disabled={isDisabled}/> : null}
    </div>
  );
}

export default PositionApp;