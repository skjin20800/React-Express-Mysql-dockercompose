import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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

    fetch('http://3.15.160.45:5000/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(title),
    })
      .then((res) => {
        // Catch는 여기서 오류가 나야 실행됨.
        if (res !== null) {
          props.history.push('/');
        } else {
          alert('데이터 전송에 실패하였습니다.');
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
