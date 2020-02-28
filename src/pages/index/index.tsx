import * as React from "react";
import { Text, View } from "remax/wechat";
import styles from "./index.module.css";

interface Item {
  name: string;
  index: number | string;
}

export default () => {
  const list: Item[] = [
    {
      name: "住",
      index: 1
    },
    {
      name: "别",
      index: 2
    },
    {
      name: "配",
      index: 3
    },
    {
      name: "办",
      index: 4
    },
    {
      name: "四",
      index: 5
    },
    {
      name: "仓",
      index: 6
    },
    {
      name: "所",
      index: 7
    },
    {
      name: "合",
      index: 8
    },
    {
      name: "垫",
      index: 9
    }
  ];

  return (
    <View className={styles.app}>
      <View className={styles.main}>
        {list.map(item => {
          return (
            <View key={item.index} className={styles.item}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
