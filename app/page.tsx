import Hero from './components/layout/home/Hero'
import NewRelease from './components/layout/home/NewRelease'
import SocialLinks from './components/layout/home/SocialLinks'
export default function Home() {
  return (
    <div>
      <Hero />
      <NewRelease className="w-full" />
      <SocialLinks className="w-full" />

    </div>
  );
}
