import DashboardPage from "./routes/DashboardPage";
import TopicsPage from "./routes/TopicsPage";
import CoursesPage from "./routes/CoursesPage";
import CourseTemplatesPage from "./routes/CourseTemplatesPage";
import CoachesPage from "./routes/CoachesPage";
import StudentsPage from "./routes/StudentsPage";

export const Routes = [
  {
    name: "dashboard",
    path: "/",
    exact: true,
    component: DashboardPage,
  },
  {
    name: "courses",
    path: "/courses",
    component: CoursesPage,
  },
  {
    name: "course templates",
    path: "/course-templates",
    component: CourseTemplatesPage,
  },
  {
    name: "topics",
    path: "/topics",
    component: TopicsPage,
  },
  {
    name: "coaches",
    path: "/coaches",
    component: CoachesPage,
  },
  {
    name: "students",
    path: "/students",
    component: StudentsPage,
  },
];
