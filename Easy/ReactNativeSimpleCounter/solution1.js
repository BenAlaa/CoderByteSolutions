import React, { useState } from "react";
import { Text, View } from "react-native";

const SimpleCounter = () => {
  let [count, setCount] = useState(0)
  return (
    <View>
      <Text>button count: <span id="actualCount">{count}</span></Text>
      <button id="mainButton" onClick={() => setCount(count + 1)}>Increase</button>
    </View>
  );
};

export default SimpleCounter;