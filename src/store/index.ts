import constate from "constate";
import { useCallback, useState } from "react";
import homeSelectedIcon from "@/assets/home_selected.png";
import homeIcon from "@/assets/home.png";
import userIcon from "@/assets/person.png";
import userSelectedIcon from "@/assets/person_selected.png";

function useTabBarer() {
  const initTabBar = [
    {
      text: "首页",
      pagePath: "pages/index/index",
      iconPath: homeIcon,
      selectedIconPath: homeSelectedIcon
    },
    {
      text: "我的",
      pagePath: "pages/user/user",
      iconPath: userIcon,
      selectedIconPath: userSelectedIcon
    }
  ];
  const [tabBar, setTabBar] = useState(initTabBar);
  const updateTabBar = useCallback(fn => setTabBar(tabBar => fn(tabBar)), []);
  return { tabBar, updateTabBar };
}
const [Provider, useTabBar, useUpdateTabBar] = constate(
  useTabBarer,
  value => value.tabBar,
  value => value.updateTabBar
);
export { Provider, useTabBar, useUpdateTabBar };
