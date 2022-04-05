import pages from "../pages";
const routes = [
  { path: "/date", element: <pages.HomePage />, type: "public" },
  { path: "/", element: <pages.HomePage />, type: "public" },
  { path: "/harrison", element: <pages.Harrison />, type: "public" },
  { path: "/oluwatosin", element: <pages.Oluwatosin />, type: "public" },
  { path: "/couple", element: <pages.Couples />, type: "public" },
  { path: "/photoshoot", element: <pages.PrephotoShoot />, type: "public" },
];
export default routes;
