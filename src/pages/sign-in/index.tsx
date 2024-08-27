import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { auth } from "@service";
import { saveToken } from "@token-service";
import { useNavigate } from "react-router-dom";
type FieldType = {
  phone_number: string | undefined;
  password: string | undefined;
};
const Index = () => {
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>["onFinish"] = async(values) => {
    try {
      const response: any = await auth.sign_in(values);
    
      if (response && response.status === 201) {
        const data = response.data?.data;
        if (data && data.tokens && data.tokens.access_token) {
          const { tokens: { access_token } } = data;
          saveToken("access_token", access_token);
          navigate("/main")
        } else {
          console.error("Tokens or access_token is missing in the response data");
        }
      } else {
        console.error(`Unexpected response status: ${response?.status}`);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[600px] p-3 flex flex-col items-center justify-center">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Username"
            name="phone_number"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" iconPosition="end">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Index;
