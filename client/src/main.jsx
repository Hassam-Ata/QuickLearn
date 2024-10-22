import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import BridgingAlumniAndStudents from "./screens/BridgingAlumniAndStudents";
import ProfileAndPersonalization from "./screens/ProfileAndPersonalization";
import ProgressTrackingAndAnalytics from "./screens/ProgressTrackingAndAnalytics";
import RequestManagement from "./screens/RequestManagement";
import SelfPacedLearning from "./screens/SelfPacedLearning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "BridgingAlumniAndStudents",
    element: <BridgingAlumniAndStudents />,
  },
  {
    path: "ProfileAndPersonalization",
    element: <ProfileAndPersonalization />,
  },
  {
    path: "ProgressTrackingAndAnalytics",
    element: <ProgressTrackingAndAnalytics />,
  },
  {
    path: "RequestManagement",
    element: <RequestManagement />,
  },
  {
    path: "SelfPacedLearning",
    element: <SelfPacedLearning />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
