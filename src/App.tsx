import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MarqueeTicker from './components/layout/MarqueeTicker';

// Section Components
import HeroSection from './components/sections/HeroSection';
import DropSection from './components/sections/DropSection';
import ProductGrid from './components/sections/ProductGrid';
import QuizCTA from './components/sections/QuizCTA';
import BundleBuilder from './components/sections/BundleBuilder';
import LookbookSection from './components/sections/LookbookSection';
import ReviewsSection from './components/sections/ReviewsSection';
import EmailSignup from './components/sections/EmailSignup';

// UI Components
import CartDrawer from './components/ui/CartDrawer';

// Chatbot Components
import ChatbotWidget from './components/chatbot/ChatbotWidget';

function App() {
  return (
    <div className="min-h-screen bg-gloss-white font-body">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Marquee Ticker */}
      <MarqueeTicker />
      
      {/* Drop Section with Countdown */}
      <DropSection />
      
      {/* Product Grid with Filters */}
      <ProductGrid />
      
      {/* Quiz CTA Section */}
      <QuizCTA />
      
      {/* Bundle Builder */}
      <BundleBuilder />
      
      {/* Lookbook Section */}
      <LookbookSection />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Email Signup */}
      <EmailSignup />
      
      {/* Footer */}
      <Footer />
      
      {/* Cart Drawer */}
      <CartDrawer />
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
