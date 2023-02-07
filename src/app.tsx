import { Suspense } from "solid-js";
import {
  A,
  ErrorBoundary,
  FileRoutes,
  Routes,
  Scripts,
} from "solid-start";

export default function App() {
    return (
        <div>
            <Suspense>
                <ErrorBoundary>
                <A href="/">Index</A>
                <A href="/about">About</A>
                <Routes>
                    <FileRoutes />
                </Routes>
                </ErrorBoundary>
            </Suspense>
            <Scripts />
        </div>
    );
}
