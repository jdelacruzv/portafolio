export const projects = [
	{
		id: 0,
		title: "LogosApp",
		featured: true,
		text:
			"A modern Bible reader built with Astro and JavaScript, powered by a custom FastAPI backend. It provides access to 24 Bible versions, global search and verse comparison.",
		image: "/assets/projects/logosapp.webp",
		technologies: ["Astro", "JavaScript", "FastAPI", "Python"],
		pathDemo: "https://logosapp.vercel.app/",
		pathCode: "https://github.com/jdelacruzv/logosapp",
	},
	{
		id: 1,
		title: "LogosAPI",
		featured: false,
		text:
			"A REST API built with FastAPI and SQLite, providing access to 24 Bible versions, global search, verse comparison and intelligent book mapping.",
		image: "/assets/projects/logosapi.webp",
		technologies: ["Python", "FastAPI", "SQLite", "Uvicorn"],
		pathDemo: "https://logosapi.vercel.app/docs",
		pathCode: "https://github.com/jdelacruzv/logosAPI",
	},
	{
		id: 2,
		title: "DjangoMen",
		featured: false,
		text:
			"A Django project inspired by Django Girls, enhanced with personal ideas, improvements and experiments to explore Python and Django.",
		image: "/assets/projects/djangomen.webp",
		technologies: ["Python", "Django"],
		pathDemo: "https://djangomenblog.pythonanywhere.com/",
		pathCode: "https://github.com/jdelacruzv/djangomen",
	},
];
