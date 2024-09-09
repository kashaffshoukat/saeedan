import React, { Component } from "react";
import ErrorPage from "./components/ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <>
            "<ErrorPage />{" "}
          </>
        ) : (
          this.props.children
        )}

        {console.log(this.state.hasError)}
      </div>
    );
  }
}
export default ErrorBoundary;
