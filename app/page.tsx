"use client"
import { title, subtitle } from "@/components/primitives";
import { Image, Link} from "@nextui-org/react";
import {useState, useEffect} from "react"

export default function Home() {
	
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

  	return (
    <section>
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>Hi, I am James Fang!</h1>
				<h2 className={subtitle()}>I am a prospective Master of Computer Science student at UIUC.</h2>
				
			</div>

			<div className = "w-full md:w-3/4 mx-auto my-8">
					<Image
						alt="Snowy UIUC Night"
						src="/images/uiuc-snow-night.webp"
					/>
					<p className = "text-center text-sm italic text-neutral-700 mt-1">
						Welcome to my university. Looking south from University of Illinois Urbana-Champaign 
						(UIUC) in winter at night. From near to far, Illini Union, Main Quad, 
						Foellinger Auditorium, South Quad, and Bell Tower. Isn&apos;t it pretty?
					</p>
			</div>
			
			<div className="my-8">
				<h1 className={title({ size: "sm" })}>Current Work</h1>
				<p className="my-4">
					I am working on PrepStar AI (<Link href = "https://www.prepstar.io">www.prepstar.io</Link>), an interactive AI-based practice exam engine for students in high school. This 
					startup stems from my experiences studying for AP/IB exams in high school, where I really wished that there 
					were more practice materials that would&apos;ve saved me time. The practice exams are generated with state-of-the-art natural language processing 
					(NLP) models, calibrated at college-exam level or slightly harder to make sure students are prepared for exams.
				</p>
				<p className="my-4">
					I&apos;ve also been working on Bioimedge (pronounced bio-image), a zero- and low-code platform 
					for computer vision for biomedical and healthcare purposes. I envision this as a B2B startup
					working with doctors, researchers, and other businesses with needs for biomedical imaging. 
					I am looking for motivated, talented people to join as cofounder / engineeers. 
				</p>
			</div>

			<div className="my-8">
				<h1 className={title({ size: "sm" })}>Education</h1>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Master of Computer Science (MCS), UIUC, Jan 2024 - May 2025</li>
					<li>Bachelor of Science (B.S.), Computer Science, UIUC, Aug 2021 - May 2023</li>
				</ul>
				<div className = "flex flex-col md:flex-row gap-4 items-center">
					<div className = "w-full md:w-1/2 ">
						<p>
							I graduated from Upper Saint Clair High School in June 2021. I was an exchange
							student at École polytechnique fédérale de Lausanne (EPFL) in Lausanne, 
							Vaud, Switzerland from September 2022 to February 2023, pictured 
							{isMobile ? " below" : " on the right"}.
						</p>
					</div>
					<div className = "w-full md:w-1/2">
						<Image
							alt="EPFL Campus"
							src="/images/epfl.webp"
						/>
					</div>
				</div>
			</div>

			<div className="my-8">
				<h1 className={title({ size: "sm" })}>Interests</h1>
				<p className="my-4">
					I am specifically interested in machine learning, specifically computer vision, for bioinformatics and healthcare purposes. My other interests also include:
				</p>
				<ul className="list-disc my-4">
					<li>Medical data science (i.e. preprocessing, mining)</li>
					<li>Deep Learning for Education (Natural Language Processing, Computer Vision</li>
					<li>General-purpose computer vision (i.e. architectures and training/validation optimizations for time & performance)</li>
					<li>Algorithmic & mathematical theory (i.e. combinatorics)</li>
					<li>Web/frontend development</li>
					<li className = "ml-12">Still trying to get better at it, this personal page is my exercise!</li>
				</ul>
			</div>
		</div>
    </section>
 	);
}