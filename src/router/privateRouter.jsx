// create private router

import PageLayout from "../components/PageLayout/PageLayout";
import Dashborad from "../pages/dashboard/Dashborad";
import User from "../pages/user/User";
import PrivateGard from "./privateGard";

const privateRouter = [
  {
    element: <PageLayout/>,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashborad />,
          },
          {
            path: "/users",
            element: <User />,
      },
    ],
  },
    ]
  }
];

// export router
export default privateRouter;
