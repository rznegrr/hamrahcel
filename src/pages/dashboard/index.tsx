import Dashboard from "@/features/dashboard/Dashboard";
import Applayout from "@/layouts/Applayout";
import ProtectedRoutes from "@/layouts/ProtectedRoutes";
import Breadcrumb from "@/ui/BreadCrumb";
import HeadTitle from "@/ui/HeadTitle";
import React from "react";

function dashboard() {
  return (
    <>
      <HeadTitle title="داشبورد" meta="داشبورد همراه سل" />
      <Applayout>
        <Breadcrumb />
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      </Applayout>
    </>
  );
}

export default dashboard;
