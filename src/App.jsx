import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout";
// import ExperienceSection from "./content/ExperienceSection";
// import ProjectSection from "./content/ProjectSection";
// import CertificateSection from "./content/CertificateSection";
// const Layout = React.lazy(() => import("./components/Layout"));
const Layout = lazy(() => import("./components/Layout"));
const ExperienceSection = lazy(() => import("./content/ExperienceSection"));
const ProjectSection = lazy(() => import("./content/ProjectSection"));
const CertificateSection = lazy(() => import("./content/CertificateSection"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Routes>
          <Route exact path="/" element={<ExperienceSection />}></Route>
          <Route exact path="/certificate" element={<CertificateSection />}></Route>
          <Route exact path="/project" element={<ProjectSection />}></Route>
          <Route exact path="/skill" element={<ProjectSection />}></Route>
          <Route exact path="*" element={<ExperienceSection />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;