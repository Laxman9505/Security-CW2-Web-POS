/** @format */

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Input } from "antd";

const CKEditorFormItem = ({ name, label, rules }) => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <Form.Item label={label} name={name} rules={rules}>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
    </Form.Item>
  );
};

export default CKEditorFormItem;
