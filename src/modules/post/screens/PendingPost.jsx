import React from 'react';
import {Tabs, Card, Row, Col, Typography, Button, Select, Table, Space, Input} from 'antd';
import Search from 'antd/es/input/Search';
import { useState, useRef, useEffect } from 'react';
import { useNavigate,  useLoaderData, useFetcher, Form, redirect } from 'react-router-dom';
import PostTable from '../components/TableOfPost';
import ApiService from '../../../service/ApiService';
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';
import moment from 'moment';
import { borrowingColumns, lendingColumns } from '../components/tableColumn';

//function loader to call API
export async function loader() {
  const response = await ApiService.get("posts?post_status[eq]='pending'");
  const posts = response.result;
  console.log("length",posts.length);
  if (!posts) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });  
  }
  const postLending = posts.filter(post =>  post.type === 'lending');
  const postBorrowing = posts.filter(post => post.type === 'borrowing');
  console.log("lease", postLending)
  console.log("no lease", postBorrowing)
  return { postLending, postBorrowing};
}

function PendingPost(props) {
  const navigate = useNavigate()
  const { Title } = Typography;
  const { postLending, postBorrowing} = useLoaderData()
  const fetcher = useFetcher();
  const actionColumn = {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <fetcher.Form method="post">
          <Button 
            onClick={(e)=>{
              e.stopPropagation()
            }}
            type="primary"
            htmlType="submit"  
            name="id"
            value={record.id}>
              Duyệt
          </Button>
          <input type="hidden" name="type" value ="approve" />
        </fetcher.Form>
        <fetcher.Form method="post">
          <Button 
            onClick={(e)=>{
              e.stopPropagation()
            }}
            type="primary" danger
            htmlType="submit"  
            name="id"
            value={record.id}>
              Từ chối
          </Button>
          <input type="hidden" name="type" value ="reject" />
        </fetcher.Form>
      </Space>
    ),
  }
  const tabs = [
    {
      key: '1',
      label: 'Cho vay',
      children:<PostTable 
        columns={[
          ...lendingColumns,
          actionColumn
        ]} 
        data={postLending} 
      />,
    },
    {
      key: '2',
      label: 'Cần vay',
      children: <PostTable columns={[
        ...borrowingColumns,
        actionColumn
      
      ]} data={postBorrowing}/>,
    },
  ];
  return (
    <div>
      <Card>
      <Breadcrumbs></Breadcrumbs>
        <Row style={{marginBottom:"16px"}}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Bài đăng chờ duyệt
            </Title>
          </Col>
        </Row>
        <Row style={{marginBottom:"12px"}}>
          <Col>
              <Search
              placeholder="Nhập thông tin cần tìm..."
              style={{
                width: 500,
              }}
              onSearch={() => {}}
              enterButton
            />
            </Col>
        </Row>
    
        <Tabs defaultActiveKey="1" items={tabs}/>
      </Card>
      
    </div>
  );
}

export default PendingPost;