import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';
import { Navigate } from 'react-router-dom';
// Protect routes

import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
//main route here
import DashBoard, {
  loader as dashboardLoader,
} from './modules/dashboard/DashBoard';
import PendingPost, {
  loader as pendingPostLoader,
} from './modules/post/screens/PendingPost';
import ApprovedPost, {
  loader as approvedPostLoader,
} from './modules/post/screens/ApprovedPost';
import RejectedPost, {
  loader as rejectedPostLoader,
} from './modules/post/screens/RejectedPost';
import { action as postAction } from './modules/post/action';
import { action as developerAction } from './modules/developer/action';
import { action as userAction } from './modules/user/action';
import { action as reportingAction } from './modules/reporting/action';
import { action as blogAction } from './modules/blog/action';
import Blog, { loader as blogLoader } from './modules/blog/screens/Blog';
import Root from './Root';
import Package, {
  loader as packageLoader,
} from './modules/package/screens/Package';
import Voucher, {
  loader as voucherLoader,
} from './modules/voucher/screens/Voucher';
import PendingReporting, {
  loader as pendingReportingLoader,
} from './modules/reporting/screens/PostReporting';
import UserReporting, {
  loader as userReportingLoader,
} from './modules/reporting/screens/UserReporting';
import User, { loader as userLoader } from './modules/user/screens/User';
import PendingUser from './modules/user/screens/PendingUser';
import VertificatedUser from './modules/user/screens/VertificatedUser';
import Developer, {
  loader as developerLoader,
} from './modules/developer/screens/DeveloperList';
import BlogDetail, {
  loader as blogDetailLoader,
} from './modules/blog/screens/BlogDetail';
import AddNewPage from './modules/blog/screens/AddNewPage';
import EditBlog, {
  loader as EditBlogLoader,
} from './modules/blog/screens/BlogEdit';
import { Route } from 'react-router-dom';

import ContractTemplatePage from './modules/contract_template/screens/ContractTemplatePage';
import ContractTemplatePageDetail from './modules/contract_template/screens/ContractTemplatePageDetail';
import AddNewContractTemplate from './modules/contract_template/screens/AddNewContractTemplate';
import ContractTemplateEdit from './modules/contract_template/screens/ContractTemplateEdit';
import LoginPage from './modules/login/LoginPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            index: true,
            path: '/',
            element: <DashBoard />,
            loader: dashboardLoader,
          },
          {
            path: 'pending_post',
            element: <PendingPost />,
            loader: pendingPostLoader,
            action: postAction,
          },
          {
            path: 'approved_post',
            element: <ApprovedPost />,
            loader: approvedPostLoader,
            action: postAction,
          },
          {
            path: 'rejected_post',
            element: <RejectedPost />,
            loader: rejectedPostLoader,
            action: postAction,
          },
          {
            path: 'voucher',
            element: <Voucher />,
            loader: voucherLoader,
          },
          {
            path: 'post_reporting',
            element: <PendingReporting />,
            loader: pendingReportingLoader,
            action: reportingAction,
          },
          {
            path: 'user_reporting',
            element: <UserReporting />,
            loader: userReportingLoader,
            action: reportingAction,
          },

          {
            path: 'verificated_user',
            element: <VertificatedUser />,
          },
          // {
          //   path: "pending_user",
          //   element: <PendingUser/>,
          // },
          {
            path: 'blogs',
            element: <Blog />,
            loader: blogLoader,
            action: blogAction,
          },
          {
            path: 'blogs/:id',
            element: <BlogDetail />,
            loader: blogDetailLoader,
            action: blogAction,
          },
          {
            path: 'blogs/add',
            element: <AddNewPage />,
            action: blogAction,
          },
          {
            path: 'blogs/edit/:id',
            element: <EditBlog />,
            loader: EditBlogLoader,
            action: blogAction,
          },
          // {
          //   path: "approved_post",
          //   element: <ApprovedPost />,
          // },
          {
            path: 'package',
            element: <Package />,
            loader: packageLoader,
          },
          {
            path: 'pending_reporting',
            element: <PendingReporting />,
          },
          // {
          //   path: 'approved_reporting',
          //   element: <ApprovedReporting />,
          // },
          {
            path: 'user',
            element: <User />,
            loader: userLoader,
            action: userAction,
          },
          {
            path: 'verificated_user',
            element: <VertificatedUser />,
          },
          {
            path: 'pending_user',
            element: <PendingUser />,
          },
          {
            path: 'developer/:page',
            element: <Developer />,
            loader: developerLoader,
            action: developerAction,
          },

          {
            path: 'contract_template',
            element: <ContractTemplatePage />,
            loader: blogLoader,
            action: blogAction,
          },
          {
            path: 'contract_template/:id',
            element: <ContractTemplatePageDetail />,
            loader: blogDetailLoader,
            action: blogAction,
          },
          {
            path: 'contract_template/add',
            element: <AddNewContractTemplate />,
            action: blogAction,
          },
          {
            path: 'contract_template/edit/:id',
            element: <ContractTemplateEdit />,
            loader: EditBlogLoader,
            action: blogAction,
          },
        ],
      },
    ],
  },
]);


const App = () => {
  return (
    <React.StrictMode>
      {
       localStorage.getItem('token') ==='1234567890' ? (
          <RouterProvider router={router}>
            <Routes />
          </RouterProvider>
        ) : (
          <LoginPage />
        )
      }
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);