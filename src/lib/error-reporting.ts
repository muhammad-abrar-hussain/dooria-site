type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorReporter = (
  error: unknown,
  context?: Record<string, unknown>,
  options?: ErrorReportOptions,
) => void;

declare global {
  interface Window {
    // Optional hook: a host page may install a reporter to receive runtime errors.
    __reportRuntimeError?: ErrorReporter;
  }
}

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Loaders and server fns commonly throw a raw Response; String(it) is the
  // opaque "[object Response]", so pull out the status and URL instead.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  window.__reportRuntimeError?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      message,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}