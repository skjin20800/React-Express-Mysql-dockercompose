import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const SaveForm = (props) => {
  const [title, setTitle] = useState({
    title: '',
  });

  const changeValue = (e) => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const submitTitle = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.
    

axios({
  url: '/api/save',
  method: 'post',
  headers: {'Content-Type': 'application/json; charset=utf-8',},
  data: {
    title: title
  }  
});

  };

  return (
    <Form onSubmit={submitTitle}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={changeValue}
          name="title"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SaveForm;
