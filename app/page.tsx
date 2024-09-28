import { AboutClub } from "./components/aboutClub";
import { AboutUsSection } from "./components/aboutUsSection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";
import { JudgeSection } from "./components/JudgeSection";
import { MentorSection } from "./components/MentorSection";
import { PrizeSection } from "./components/prizeSection";
import { RoundTimeline } from "./components/roundTimeline";
import { ThemeSection } from "./components/themeSection";
import { WhoSection } from "./components/whoSection";
import { WorkshopTimeline } from "./components/workshopTimeline";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<AboutUsSection />
			<AboutClub />
			<WhoSection />
			<ThemeSection />
			<RoundTimeline />
			<WorkshopTimeline />
			<PrizeSection />
			<JudgeSection />
			<MentorSection />
			<Footer />
		</>
	);
}
