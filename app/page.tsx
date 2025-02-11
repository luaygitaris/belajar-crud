import HeroComponent from '@/components/home/hero';
import MainComponent from '@/components/home/main';
import NavbarComponent from '@/components/home/navbar';

export default function Home() {
	return (
		<div className=''>
			<NavbarComponent />
			<HeroComponent />
			<MainComponent />
		</div>
	);
}
