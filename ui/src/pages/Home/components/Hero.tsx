import React from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image } from "antd";
import hero from "assets/Home/hero.webp";
import { FEATURE_DATA } from "data/featureData";

const { Title } = Typography;
const Hero: React.FC = () => {
	return (
		<section className={style.home__hero}>
			<Title className={style.home__hero_text_title}>
				Your Mate in Software Development
			</Title>
			<Image
				src={hero}
				alt="BinaryTree: Developer Productivity Tools"
				preview={false}
				style={{
					maxHeight: "40dvh",
				}}
			/>
			<Title className={style.home__hero_text_paragraph} level={2}>
				At binarytree.dev, we provide an array of developer productivity
				tools designed to help you save time. With an{" "}
				<a
					href="https://github.com/users/lifeparticle/projects/2"
					target="_blank"
				>
					ever-growing number of features
				</a>{" "}
				(currently <b>{FEATURE_DATA.length}</b>), our platform is
				constantly evolving to meet the needs of developers like you
			</Title>
		</section>
	);
};

export default Hero;
