import TopMost from './components/topMost';
import TopBody from './components/topBody';
import Navbar from './components/navbar';
import Hero from './components/hero';
import BellyPart from './components/bellyPart';
import Arrow from './components/arrow';
import RecentView from './components/recentView';
import Brand from './components/brand';
import NewsLetter from './components/newsLetter';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <TopMost />
      <TopBody />
      <Navbar />
      <Hero />
      <BellyPart />
      <Arrow />
      <RecentView />
      <Brand />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
