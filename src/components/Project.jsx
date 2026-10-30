import LinkButton from "./LinkButton";
import style from "./Project.module.css";

const Project = ({
	title,
	image,
	text,
	pathDemo,
	pathCode,
	technologies = [],
	featured = false,
}) => {
	return (
		<figure
			className={`${style.project__box} ${
				featured ? style.project__boxFeatured : ""
			}`}
		>
			<div className={style.project__imageContainer}>
				<img
					className={style.project__img}
					src={image}
					alt={`Screenshot of ${title}`}
					loading={featured ? "eager" : "lazy"}
					decoding="async"
				/>
			</div>

			<figcaption className={style.project__content}>
				<div className={style.project__heading}>
					<p className={style.project__title}>{title}</p>

					{featured && (
						<span className={style.project__badge}>Featured Project</span>
					)}
				</div>

				<p className={style.project__text}>{text}</p>

				<div className={style.project__technologies}>
					{technologies.map((technology) => (
						<span key={technology} className={style.project__technology}>
							{technology}
						</span>
					))}
				</div>

				<div className={style.project__links}>
					<LinkButton
						text={["Demo", "Code"]}
						icon={["/assets/icons/link.png", "/assets/icons/code.png"]}
						path={[pathDemo, pathCode]}
					/>
				</div>
			</figcaption>
		</figure>
	);
};

export default Project;
