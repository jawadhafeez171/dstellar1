import { TopBar } from '@/components/TopBar';
import { Hero } from '@/components/Hero';
import { IntroVideo } from '@/components/IntroVideo';
import { Trust } from '@/components/Trust';
import { Industries } from '@/components/Industries';
import { SAPServices } from '@/components/SAPServices';
import { Products } from '@/components/Products';
import { SAPMarquee } from '@/components/SAPMarquee';
import { BigStats } from '@/components/BigStats';
import { CTAStrip } from '@/components/CTAStrip';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <IntroVideo />
      <Trust />
      <Industries />
      <SAPServices />
      <Products />
      <SAPMarquee />
      <BigStats />
      <CTAStrip />
      <Footer />
    </>
  );
}
