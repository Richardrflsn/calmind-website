import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Dashboard from './pages/Home'; 
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import LoginPage from "./pages/auth/login/LoginPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import MotivationPage from './pages/Motivation';  
import TalkTherapyPage from './pages/TalkTherapy'; 
import './App.css' 

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Navbar from "./components/common/Navbar";

function App() {
  const { data: authUser, isLoading } = useQuery({
    // User queryKey to give a unique name to our query and refer to it later
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong")
        }

        console.log("authUser is here: ", data);
        return data;

      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });

  const location = useLocation();
  const { pathname } = location;

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
          <LoadingSpinner size="lg"/>
      </div>
    )
  }

  const hideSidebarAndRightPanel = ["/motivation", "/talk-therapy", "/dashboard"];

  return (
    <div className="relative">
    {pathname !== "/login" && pathname !== "/signup" && pathname !=="/dashboard" && <Navbar />}
    {pathname === '/' ? (
      <div className='flex max-w-6xl mx-auto'>
        {/* Common component, bc it's not wrapped with Routes */}
        {authUser &&  !hideSidebarAndRightPanel.includes(pathname) && <Sidebar />}
        <Routes>
          {/* Dashboard Route accessible to all users */}
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
          <Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
          <Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
          <Route path='/motivation' element={<MotivationPage />} />
          <Route path='/talk-therapy' element={<TalkTherapyPage />} />
        </Routes>
        {authUser && !hideSidebarAndRightPanel.includes(pathname) && <RightPanel/>}
        <Toaster/>
      </div>
    ) : (
      <Routes>
        {/* Dashboard Route accessible to all users */}
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
        <Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
        <Route path='/motivation' element={<MotivationPage />} />
        <Route path='/talk-therapy' element={<TalkTherapyPage />} />
      </Routes>
    )}
  </div>

  )
}

export default App;
