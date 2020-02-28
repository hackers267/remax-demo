import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: ["pages/index/index", "pages/user/user"],
  window: {
    navigationBarTitleText: "测试",
    navigationBarBackgroundColor: "#508cee"
  },
  tabBar: {
    selectedColor: "#508cee",
    color: "#bdbdbd",
    backgroundColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "./assets/home.png",
        selectedIconPath: "./assets/home_selected.png"
      },
      {
        text: "我的",
        pagePath: "pages/user/user",
        iconPath: "./assets/person.png",
        selectedIconPath: "./assets/person_selected.png"
      }
    ]
  }
};

export default config;
