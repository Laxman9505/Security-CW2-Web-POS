/** @format */

import { Button, Form, Input, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import AddProductSkeleton from "./AddProductSkeleton";

function AddProduct({ isEdit, setIsEdit }) {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState("<p></p>");
  const { addLoading, isLoading, editData, addSuccess } = useSelector(
    (state) => state.inventoryReducer
  );

  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (addSuccess) {
      navigate("/inventory/list");
      setImagePreview(null);
      setImage(null);
      setEditorState("<p></p>");
    }
  }, [addSuccess]);

  const addProductHandler = async (values) => {
    const formData = new FormData();
    const request = {
      ...values,
      Discount: parseFloat(values.Discount),
      Description: editorState,
      Id: state?.product ? state?.product?._id : "",
    };
    formData.append("Request", JSON.stringify(request));

    if (image) {
      formData.append("image", image);
    }

    dispatch({
      type: "ADD_PRODUCT_REQUEST",
      payload: formData,
    });
  };

  useEffect(() => {
    if (state?.product) {
      form.setFields([
        {
          name: "ItemName",
          value: state?.product?.ItemName,
        },
        {
          name: "ItemCode",
          value: state?.product?.ItemCode,
        },
        {
          name: "Brand",
          value: state?.product?.Brand,
        },
        {
          name: "Category",
          value: state?.product?.Category,
        },
        {
          name: "Discount",
          value: state?.product?.Discount,
        },
        {
          name: "UnitPrice",
          value: state?.product?.UnitPrice,
        },
        {
          name: "isActive",
          value: state?.product?.IsActive,
        },
      ]);

      setImagePreview(
        `http://localhost:8000/uploads/${state?.product?.ItemImage}`
      );
    }
  }, [state]);

  return (
    <>
      {isEdit && (
        <div
          className="d-flex"
          style={{ cursor: "pointer" }}
          onClick={() => setIsEdit(false)}
        >
          <BsFillArrowLeftCircleFill size={22} />
          <h5 className="ms-3">Edit Product</h5>
        </div>
      )}
      <div className="menu_inner" style={{ marginTop: "0rem" }}>
        {isLoading ? (
          <AddProductSkeleton />
        ) : (
          <Form form={form} onFinish={addProductHandler}>
            <div className="row categoryField">
              {/* Items form */}
              <div className="card p-0 border-0 rounded-3">
                <div className="card-body bg-light-red">
                  <div className="row addacc_form suppliernewitem_form">
                    <div className="form-group col-md-4">
                      <div className=" pt-0">
                        <Form.Item label="Item Code" name="ItemCode">
                          <Input type="text" placeholder="Item Code" />
                        </Form.Item>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="form-group col-md-4">
                      <div className=" pt-0">
                        <Form.Item
                          label="Item Name"
                          name="ItemName"
                          rules={[
                            {
                              required: true,
                              message: "Please enter product name !",
                            },
                          ]}
                        >
                          <Input type="text" placeholder="Item Name" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="form-group col-md-4">
                      <Form.Item label="Brand" name="Slug">
                        <Input type="text" placeholder="Brand" />
                      </Form.Item>
                    </div>
                    <div className="form-group col-md-4">
                      <div className=" pt-0">
                        <Form.Item
                          label="Category"
                          name="Category"
                          rules={[
                            {
                              required: true,
                              message: "Please choose category !",
                            },
                          ]}
                        >
                          <Input type="text" placeholder="Category" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="form-group col-md-4">
                      <Form.Item
                        label="Discount"
                        name="Discount"
                        initialvalue=""
                      >
                        <Input type="text" placeholder="Discount" />
                      </Form.Item>
                    </div>

                    <div className="form-group col-md-4">
                      <Form.Item
                        label="Unit Price"
                        name="UnitPrice"
                        initialvalue=""
                        rules={[
                          {
                            required: true,
                            message: "Please enter unit price !",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="Unit Price" />
                      </Form.Item>
                    </div>

                    <div className="form-group col-md-2">
                      <Form.Item
                        label="Status"
                        name="isActive"
                        initialValue={true}
                        valuePropName="checked"
                      >
                        <Switch loading={isLoading} defaultChecked={true} />
                      </Form.Item>
                    </div>

                    <div className="form-group col-md-12"></div>

                    <div className="col-md-4 mt-3">
                      <Form.Item>
                        <label className="control-label fw-bold ">
                          Product Image {`(png, jpg, jpeg)`}
                          {imagePreview && (
                            <i
                              className="fa fa-trash ms-2 trash-icon"
                              onClick={() => {
                                setImage(null);
                                setImagePreview(null);
                              }}
                            />
                          )}
                        </label>
                        <div className="file-drop-area ">
                          <span className="choose-file-button cf1">
                            Choose Files
                          </span>
                          <span className="file-message">
                            {image ? image.name : "or drag and drop files here"}
                          </span>
                          <input
                            type="file"
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                              setImagePreview(
                                URL.createObjectURL(e.target.files[0])
                              );
                            }}
                            className="file-input"
                            accept=".jfif,.jpg,.jpeg,.png,.gif"
                            multiple=""
                          />
                        </div>
                      </Form.Item>
                    </div>
                    <div className="col-md-3">
                      <div className="giftupload inv_img mt-2">
                        <img
                          src={
                            imagePreview
                              ? imagePreview
                              : "assets/images/imagePlaceholder.png"
                          }
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col md-4 mt-2">
                        <Button
                          htmlType="submit"
                          loading={addLoading}
                          className="ms-2 text-white"
                          style={{ background: "#02215B" }}
                        >
                          Save
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            if (isEdit) {
                              setIsEdit(false);
                            }
                            navigate("/inventory/list");
                          }}
                          className="ms-1"
                          // style={{ background: "#FF0017", color: "#fff" }}
                          type="danger"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
}

export default AddProduct;
