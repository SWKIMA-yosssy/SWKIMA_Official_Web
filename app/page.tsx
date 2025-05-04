import Hero from './components/layout/home/Hero'
import NewRelease from './components/layout/home/NewRelease'
import SocialLinks from './components/layout/home/SocialLinks'
export default function Home() {
  return (
    <div>
      <div className="m-1">
        <Hero />
      </div>
      <div className="w-full">
        <NewRelease />
      </div>
      <div className="w-full">
        <SocialLinks />
      </div>
    </div>
  );
}
