import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Loan from './components/Loan';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Credit from './components/Credit';
import Chatbot from './components/Chatbot';
import Transaction from './components/Transaction';
import Video from './components/Video';
import Admin from './components/Admin';
import History from './components/History';
import Main from './components/Main';

const MainPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('Main');
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleOptionClick = (option) => {
        if (option === 'Logout') {
            handleLogout();
        } else {
            setActiveOption(option);
            if (window.innerWidth < 1024) toggleSidebar();
        }
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeOption) {
            case 'Main':
                return <Main className="h-auto"/>;
            case 'Settings':
                return <Settings />;
            case 'Profile':
                return <Profile />;
            case 'Video':
                return <Video />;
            case 'Chatbot':
                return <Chatbot />;
            case 'Transaction':
                return <Transaction />;
            case 'History':
                return <History />;
            case 'Credit':
                return <Credit />;
            case 'Loan':
                return <Loan />;
            case 'Admin':
                return <Admin />;
            default:
                return <Main />;
        }
    };

    return (
        <div className="flex flex-col bg-black h-screen">
            <Header toggleSidebar={toggleSidebar} pageTitle={activeOption} />
            <div className="flex flex-grow overflow-hidden">
                <Sidebar
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    handleOptionClick={handleOptionClick}
                    activeOption={activeOption}
                    username="JoiningIn"
                />
                <div
                    className={`transition-all duration-300 p-6 flex-grow h-full overflow-y-auto ${
                        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
                    }`}
                >
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
