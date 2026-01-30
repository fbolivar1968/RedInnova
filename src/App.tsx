import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectProgress from "./pages/ProjectProgress";
import RegisterIdea from "./pages/RegisterIdea";
import NotFound from "./pages/NotFound";
import ProjectDataMaster from "./pages/DataMaster";
import ProjectProgressDm from "./pages/ProjectProgressDm";
import ProjectProgressGh from "./pages/ProjectProgressGh";
import ProjectGh from "./pages/GH";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/gh" element={<ProjectGh />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/dm" element={<ProjectDataMaster />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/progressGh" element={<ProjectProgressGh />} />
          <Route path="/progressDm" element={<ProjectProgressDm />} />
          <Route path="/progress" element={<ProjectProgress />} />
          <Route path="/register-idea" element={<RegisterIdea />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
