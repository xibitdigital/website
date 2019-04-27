import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "redux";
import { History } from "history";

import Routes from "./routes";
import { ApplicationState } from "./store";

interface PropsFromDispatch {
  [key: string]: any;
}

// Any additional component props go here.
interface OwnProps {
  store: Store<ApplicationState>;
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = PropsFromDispatch & OwnProps;

export default class Main extends React.Component<AllProps> {
  public render() {
    const { store, history } = this.props;

    return (
      <React.Fragment>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}
