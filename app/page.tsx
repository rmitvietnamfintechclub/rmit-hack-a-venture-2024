import { AboutClub } from "./components/AboutClub";
import { AboutUsSection } from "./components/AboutUsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/HeroSection";
import { JudgeSection } from "./components/JudgeSection";
import { MentorSection } from "./components/MentorSection";
import { PartnerSection } from "./components/PartnerSection";
import { PrizeSection } from "./components/PrizeSection";
import { RoundTimeline } from "./components/RoundTimeline";
import { ThemeSection } from "./components/ThemeSection";
import { WhoSection } from "./components/WhoSection";
import { WorkshopTimeline } from "./components/WorkshopTimeline";

export default function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<AboutUsSection />
			<AboutClub />
			<PartnerSection />
			<WhoSection />
			<ThemeSection />
			<WorkshopTimeline />
			<PrizeSection />
			<JudgeSection />
			<MentorSection />
			<Footer />
		</div>
	);
}
