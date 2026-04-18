import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import AboutPreview from '../components/AboutPreview'
import Collections from '../components/Collections'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { sendToWhatsApp } from '../utils/whatsapp'

const heroImage =
	'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1800'

const collectionItems = [
	{
		title: 'Farsi Salwar',
		to: '/shop',
		image:
			'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		title: 'Sharara Suit',
		to: '/shop',
		image:
			'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		title: 'Festive Wear',
		to: '/shop',
		image:
			'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		title: 'New Arrivals',
		to: '/shop',
		image:
			'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
]

const trendingProducts = [
	{
		id: 1,
		name: 'Farsi Salwar Suit',
		price: '₹1999',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		id: 2,
		name: 'Sharara Suit',
		price: '₹2499',
		rating: 4.7,
		image:
			'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		id: 3,
		name: 'Designer Farsi Salwar',
		price: '₹2199',
		rating: 4.6,
		image:
			'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
	{
		id: 4,
		name: 'Wedding Sharara Set',
		price: '₹2799',
		rating: 4.8,
		image:
			'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1000',
	},
]

const aboutImage =
	'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1400'

const socialImages = [
	'https://images.pexels.com/photos/977567/pexels-photo-977567.jpeg?auto=compress&cs=tinysrgb&w=900',
	'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=900',
	'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=900',
	'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=900',
	'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=900',
	'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=900',
]

const testimonials = [
	{
		name: 'Riya',
		comment: 'The Sharara suit quality is amazing!',
	},
	{
		name: 'Pooja',
		comment: 'Perfect outfit for weddings!',
	},
	{
		name: 'Neha',
		comment: 'Loved the elegance and fitting!',
	},
]

function FadeInSection({ children, delay = 0 }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.8, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}

function ShopTheLookGallery() {
	const navigate = useNavigate()
	// Pick 6-8 unique looks from product images
	const looks = products.slice(0, 8).map((product, idx) => ({
		id: product.id,
		name: product.name,
		image: product.images?.[1] || product.image,
	}))
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="mb-10 text-center"
			>
				<p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-2">
					Shop The Look
				</p>
				<h2 className="font-display text-3xl sm:text-4xl text-black mb-2">
					Style Inspiration
				</h2>
				<p className="text-base sm:text-lg text-black">
					Discover how our Farsi Salwar & Sharara look in real life
				</p>
			</motion.div>
			<motion.div
				className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.12 },
					},
				}}
			>
				{looks.map((look, idx) => (
					<motion.div
						key={look.id}
						className="group relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.07)] aspect-[3/4] cursor-pointer"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.08 }}
						viewport={{ once: true }}
						onClick={() => navigate(`/product/${look.id}`)}
					>
						<img
							src={look.image}
							alt={look.name}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
						/>
						{/* Overlay */}
						<div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
							<button
								className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg tracking-wide uppercase hover:bg-gold hover:text-black hover:scale-105"
								onClick={e => { 
									e.stopPropagation(); 
									const foundProduct = products.find(p => p.id === look.id);
									if(foundProduct) sendToWhatsApp(foundProduct);
								}}
								type="button"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
								Shop This Look
							</button>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="bg-white overflow-hidden"
		>
			{/* Hero Section directly below Navbar without extra top padding or FadeInSection */}
			<div className="pt-[116px] sm:pt-[132px]">
				<Hero image={heroImage} />
			</div>

			<div className="space-y-20 py-20 sm:space-y-28 sm:py-28">
				<FadeInSection>
					<Collections collections={collectionItems} />
				</FadeInSection>
				
				<FadeInSection>
					<Products products={trendingProducts} />
				</FadeInSection>
				
				<FadeInSection>
					<ShopTheLookGallery />
				</FadeInSection>
				
				<FadeInSection>
					<AboutPreview image={aboutImage} />
				</FadeInSection>
				
				<FadeInSection>
					<WhyChooseUs />
				</FadeInSection>
				
				<FadeInSection>
					<Testimonials testimonials={testimonials} />
				</FadeInSection>

				<FadeInSection>
					<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-10 text-center">
							<p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
								Instagram
							</p>
							<h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">
								Traditional Looks We Love
							</h2>
							<p className="mt-2 text-lg text-black">@arriv.elite</p>
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
							{socialImages.map((img, index) => (
								<motion.div
									key={index}
									className="group relative overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(31,23,10,0.12)] aspect-square"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
									viewport={{ once: true }}
								>
									<img
										src={img}
										alt="Arriv.Elite traditional outfit"
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
									<div className="absolute inset-0 flex items-center justify-center">
										<motion.div 
											className="scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
											whileHover={{ rotate: 15 }}
										>
											<Camera
												size={32}
												className="text-white drop-shadow-md"
												strokeWidth={1.5}
											/>
										</motion.div>
									</div>
								</motion.div>
							))}
						</div>
					</section>
				</FadeInSection>

				<FadeInSection>
					<Offers />
				</FadeInSection>
				
				<FadeInSection>
					<Newsletter />
				</FadeInSection>
			</div>
		</motion.div>
	)
}

export default Home
