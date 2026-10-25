import Button from "../components/Button";
import Project from "../components/Project";
import { projects } from "../utils/projects";
import style from "./ProjectsPage.module.css";

const showProjects = projects.map((project) => {
	return (
		<Project
			key={project.id}
			title={project.title}
			image={project.image}
			text={project.text}
			pathDemo={project.pathDemo}
			pathCode={project.pathCode}
		/>
	);
});

const ProjectsPage = () => {
	return (
		<section className={style.projects__container}>
			<article className={style.projects}>{showProjects}</article>
			<Button
				text={"See more"}
				icon={"/assets/icons/go.png"}
				path={"https://github.com/jdelacruzv"}
				outline
			/>
		</section>
	);
};

export default ProjectsPage;
