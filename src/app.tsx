import * as React from "react";
import "./app.less";
import { Provider } from "./store";

class App extends React.Component<any, any> {
  componentDidMount(): void {}

  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}
export default App;
