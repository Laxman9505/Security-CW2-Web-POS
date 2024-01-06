/** @format */

import { notification } from "antd";

export const openNotificationWithIcon = (type: string, message: string) => {
  // @ts-ignore
  notification[type]({
    // message: type.charAt(0).toUpperCase() + type.slice(1),
    description: message,
    duration: 2,

    style: {
      fontSize: "12px",
      background:
        type == "error" ? "#D92F54" : type == "info" ? "#0084D2" : "#03A257",
      color: "#fff",
      // // borderRadius: "10px",
      // boxShadow:
      //   "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    },
  });
};
