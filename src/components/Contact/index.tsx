import React, { FC } from "react";
import Header from "../Header";
import "antd/dist/antd.less";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Form, Input, Button } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const ContactBody = styled.div`
  padding: 200px 0;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 420px;
  @media (max-width: 768px) {
    width: 380px;
  }
  @media (max-width: 500px) {
    width: 310px;
  }
`;

const Contact: FC = () => {
  // const onFinish = (values: any) => {
  //   console.log(values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <>
      <Header />
      <ContactBody>
        <FormContainer>
          <Form
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            initialValues={{
              remember: true,
            }}
          >
            <Title
              level={3}
              style={{ textAlign: "center", fontWeight: "normal" }}
            >
              Contact us
            </Title>
            <Row justify="space-between">
              <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                <Form.Item
                  name="name"
                  label="Name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input style={{ padding: "8px 12px" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                <Form.Item
                  name="surname"
                  label="Surname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input style={{ padding: "8px 12px" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
              <Input type="email" style={{ padding: "8px 12px" }} />
            </Form.Item>
            <Form.Item
              name="phone-number"
              label="Phone number"
              labelCol={{ span: 24 }}
            >
              <Input
                type="text"
                placeholder="+374 xx xxxxxx"
                style={{ padding: "8px 12px" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                block
                size="large"
                htmlType="submit"
                style={{ backgroundColor: "#6f6868", color: "white" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </FormContainer>
      </ContactBody>
    </>
  );
};

export default Contact;
