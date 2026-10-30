import Button from "../components/Button";
import Project from "../components/Project";
import { projects } from "../utils/projects";
import style from "./ProjectsPage.module.css";

const ProjectsPage = () => {
	return (
		<section className={style.projects__container}>
			<header className={style.projects__header}>
				<h1 className={style.projects__heading}>Featured Projects</h1>
				<p className={style.projects__description}>
					A selection of projects built with passion, creativity and code.
				</p>
			</header>

			<article className={style.projects}>
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</article>

			<div className={style.projects__footer}>
				<Button
					text="Explore more on GitHub"
					icon="/assets/icons/go.png"
					path="https://github.com/jdelacruzv"
					outline
				/>
			</div>
		</section>
	);
};

export default ProjectsPage;