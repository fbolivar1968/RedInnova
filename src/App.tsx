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
import ProjectProgressRccp from "./pages/ProjectProgressRccp";
import ProjectProgressGh from "./pages/ProjectProgressGh";
import ProjectProgressExp from "./pages/ProjectProgressExp";
import ProjectGh from "./pages/GH";
import RCCP from "./pages/RCCP";
import ProjectExp from "./pages/Exp";
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
          <Route path="/project/exp" element={<ProjectExp />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/rccp" element={<RCCP />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/progressGh" element={<ProjectProgressGh />} />
          <Route path="/progressRccp" element={<ProjectProgressRccp />} />
          <Route path="/progressExp" element={<ProjectProgressExp />} />
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
