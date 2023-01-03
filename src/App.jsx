import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const Layout = lazy(() => import("./components/Layout"));
const ExperienceSection = lazy(() => import("./content/ExperienceSection"));
const ProjectSection = lazy(() => import("./content/ProjectSection"));
const CertificateSection = lazy(() => import("./content/CertificateSection"));
const SkillSection = lazy(() => import("./content/SkillSection"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[50vh]">
            <ThreeDots height="80" width="80" radius="9" color="#06b6d4" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<ExperienceSection />}></Route>
          <Route exact path="/certificate" element={<CertificateSection />}></Route>
          <Route exact path="/project" element={<ProjectSection />}></Route>
          <Route exact path="/skill" element={<SkillSection />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
