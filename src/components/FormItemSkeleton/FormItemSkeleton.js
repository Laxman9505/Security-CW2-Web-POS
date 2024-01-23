/** @format */

import { Form } from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";

const FormItemSkeleton = ({ height = 32, width = 100 }) => {
  return (
    <Form.Item label={<Skeleton width={width} />} name="storeName">
      <Skeleton height={height} />
    </Form.Item>
  );
};

export default FormItemSkeleton;
