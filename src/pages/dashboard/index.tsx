import Dashboard from "@/features/dashboard/Dashboard";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoutes from "@/layouts/ProtectedRoutes";
import Breadcrumb from "@/ui/BreadCrumb";
import HeadTitle from "@/ui/HeadTitle";
import React from "react";

function dashboard() {
  return (
    <>
      <HeadTitle title="داشبورد" meta="داشبورد همراه سل" />
      <ProtectedRoutes>
        <AppLayout>
          <Breadcrumb />
          <Dashboard />
        </AppLayout>
      </ProtectedRoutes>
    </>
  );
}

export default dashboard;
