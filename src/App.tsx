import type React from "react";
import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { StoreProvider } from "./lib/store";
import { Masthead } from "./components/ui";
import { STAGE_HUE } from "./components/Street";
import { STAGES } from "./lib/journey";
import { JourneyPage, ReadyPage, SkillsPage, TestsPage, LicencePage } from "./pages/Stages";
import { TheoryIndex, TopicPage, SignsPage } from "./pages/Theory";
import { CarPage } from "./pages/Car";
import { TheoryTestPage } from "./pages/TheoryTest";
import { LessonsPage, LessonPage } from "./pages/Lessons";
import { LogPage, SettingsPage } from "./pages/Log";

function Main({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const st = STAGES.find((x) => (pathname === x.path || pathname.startsWith(x.path + "/")));
  return <div id="main" data-stage={st?.id || "home"} style={{ ["--hue" as any]: st ? STAGE_HUE[st.id] : "#00663d" }}>{children}</div>;
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollTop />
        <a className="skip" href="#main">Skip to content</a>
        <Masthead />
        <Main>
          <Routes>
            <Route path="/" element={<JourneyPage />} />
            <Route path="/ready" element={<ReadyPage />} />
            <Route path="/theory" element={<TheoryIndex />} />
            <Route path="/theory/signs" element={<SignsPage />} />
            <Route path="/theory/:id" element={<TopicPage />} />
            <Route path="/car" element={<CarPage />} />
            <Route path="/theory-test" element={<TheoryTestPage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/lessons/:id" element={<LessonPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/licence" element={<LicencePage />} />
            <Route path="/log" element={<LogPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<JourneyPage />} />
          </Routes>
        </Main>
      </HashRouter>
    </StoreProvider>
  );
}
