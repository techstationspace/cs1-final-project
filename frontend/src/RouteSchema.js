// SideBar routes

import DashboardPage from "./routes/DashboardPage";
import TopicsPage from "./routes/TopicsPage";
import CoursesPage from "./routes/CoursesPage";
import CourseTemplatesPage from "./routes/CourseTemplatesPage";
import CoachesPage from "./routes/CoachesPage";
import StudentsPage from "./routes/StudentsPage";
import Profile from "./routes/Profile";
import RegisterView from "./components/RegisterView";
export const RoutesSideBar = [
  {
    name: "TechStation",
    path: "/",
    exact: true,
    component: DashboardPage,
    icon: "",
  },
  {
    name: "courses",
    path: "/courses",
    component: CoursesPage,
    icon: "laptop_chromebook",
  },
  {
    name: "course templates",
    path: "/course-templates",
    component: CourseTemplatesPage,
    icon: "menu_book",
  },
  {
    name: "topics",
    path: "/topics",
    component: TopicsPage,
    icon: "collections_bookmark",
  },
  {
    name: "coaches",
    path: "/coaches",
    component: CoachesPage,
    icon: "supervisor_account",
  },
  {
    name: "students",
    path: "/students",
    component: StudentsPage,
    icon: "person",
  },
  {
    name: "profile",
    path: `/profile`,
    component: Profile,
    icon: "person",
  }
];


