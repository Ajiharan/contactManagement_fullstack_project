import { height } from "@mui/system";
import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", errorInfo: "" };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div style={{ overflowY: "scroll", height: "25vh" }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            <button
              onClick={this.reloadPage}
              className="btn btn-small btn-danger mt-4"
            >
              Reoload Page
            </button>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
