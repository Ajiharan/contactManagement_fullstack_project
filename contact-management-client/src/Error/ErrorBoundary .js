import React from "react";
import * as Sentry from "@sentry/browser";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", errorInfo: "", eventId: "" };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ error, eventId, errorInfo });
    });
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
          <button
            onClick={this.reloadPage}
            className="btn btn-small btn-danger m-4"
          >
            Reoload Page
          </button>
          <button
            className="btn btn-primary btn-small m-4"
            onClick={() =>
              Sentry.showReportDialog({ eventId: this.state.eventId })
            }
          >
            Report feedback
          </button>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />

            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
