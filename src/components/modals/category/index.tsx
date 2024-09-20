import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const App = ({ open, handleCancel, category, categories }: any) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (category) {
      form.setFieldsValue({
        name: category.name,
        parentCategory: category.parentCategory || undefined,
      });
    } else {
      form.resetFields();
    }
  }, [category, form]);

  const handleSubmit = (values: any) => {
    setLoading(true);
    if (category) {
      // Update the category
      console.log("Updating category:", { ...category, ...values });
    } else {
      // Create a new category
      console.log("Creating category:", values);
    }
    setLoading(false);
    handleCancel(); // Close the modal after submission
  };

  return (
    <>
      <Modal
        open={open}
        title={category ? "Edit category" : "Create category"}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          name="categoryForm"
          style={{ width: "100%", marginTop: "20px" }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Category name"
            name="name"
            rules={[{ required: true, message: "Enter category name" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Parent category"
            name="parentCategory"
            rules={[{ required: false, message: "Select a parent category" }]}
          >
            <Select placeholder="Select a parent category" size="large">
              {categories.map((cat: any) => (
                <Option key={cat.id} value={cat.id}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              {category ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
