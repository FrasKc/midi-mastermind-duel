
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GameProvider } from "./context/GameContext";
import { useAuthRestore } from './hooks/useAuthRestore';

// Pages
import HomePage from "./pages/HomePage";
import WaitingRoom from "./pages/WaitingRoom";
import QuizRound1 from "./pages/QuizRound1";
import QuizRound2 from "./pages/QuizRound2";
import QuizRound3 from "./pages/QuizRound3";
import DuelPage from "./pages/DuelPage";
import FinalGrid from "./pages/FinalGrid";
import ResultsPage from "./pages/ResultsPage";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// Gamification pages
import BadgesPage from "./pages/BadgesPage";
import ChallengesPage from "./pages/ChallengesPage";
import ShopPage from "./pages/ShopPage";
import LeaderboardPage from "./pages/LeaderboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GameProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/waiting-room/:roomId" element={<WaitingRoom />} />
              <Route path="/round1/:roomId" element={<QuizRound1 />} />
              <Route path="/round2/:roomId" element={<QuizRound2 />} />
              <Route path="/round3/:roomId" element={<QuizRound3 />} />
              <Route path="/duel/:roomId/:playerId" element={<DuelPage />} />
              <Route path="/final-grid/:roomId" element={<FinalGrid />} />
              <Route path="/results/:roomId" element={<ResultsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              {/* Gamification routes */}
              <Route path="/badges" element={<BadgesPage />} />
              <Route path="/challenges" element={<ChallengesPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </GameProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

const AuthRestorer = () => {
  useAuthRestore();
  return null;
};

export default App;
