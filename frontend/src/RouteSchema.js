import DashboardPage from "./routes/DashboardPage";
import TopicsPage from "./routes/TopicsPage";
import CoursesPage from "./routes/CoursesPage";

export const Routes = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    name: "courses",
    path: "/courses",
    component: CoursesPage,
  },
  {
    name: "topics",
    path: "/topics",
    component: TopicsPage,
  },
];
