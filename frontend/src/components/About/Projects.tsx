import * as Icons from '../Icons/ProjectIcons'
import * as DCIcons from '../Icons/DataCloudIcons'
import { GithubIcon } from '../Icons/SocialIcons'
import { Project, TechBadge } from './about.interface'

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    title: 'Adatgyűjtés',
    description: 'Adatgyűjtés szakdolgozathoz',
    githubUrl: 'https://github.com/CsabaAndi/data-collecting',
    tech: [
      { label: 'Python', icon: Icons.PythonIcon },
      { label: 'Playwright', icon: Icons.PlayWrightIcon },
    ],
  },
  {
    title: 'Portfólió weboldal',
    description: 'Reszponzív portfólió weboldal',
    githubUrl: 'https://github.com/CsabaAndi/csabaandi.github.io',
    tech: [
      { label: 'React', icon: Icons.ReactIcon },
      { label: 'Tailwind CSS', icon: Icons.TailwindIcon },
      { label: 'Docker', icon: Icons.DockerIcon },
    ],
  },
  {
    title: 'Kriptovaluta árfolyam figyelő',
    description: 'Webfejlesztési keretrendszerek projektmunka',
    githubUrl: 'https://github.com/CsabaAndi/Webkert_2024',
    tech: [
      { label: 'Angular', icon: Icons.AngularIcon },
      { label: 'Firebase', icon: DCIcons.FirebaseIcon },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const TechBadges: React.FC<TechBadge> = ({ label, icon: Icon }) => (
  <div className="flex items-center gap-x-3 rounded-xl bg-stone-700 px-3 py-2 shadow-md shadow-black/20">
    <Icon size_min={16} size_standard={28} />
    <span className="text-xs font-bold tracking-tight text-stone-200 sm:text-sm">
      {label}
    </span>
  </div>
)

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  githubUrl,
  tech,
}) => (
  <article className="flex flex-col gap-y-3 rounded-xl border-2 border-color-main bg-stone-800 p-4 shadow-xl shadow-black/30 sm:p-6">
    {/* Card header */}
    <div className="flex items-start justify-between gap-x-3">
      <h3 className="text-base font-extrabold tracking-tight text-stone-200 sm:text-lg">
        {title}
      </h3>
      <div className="shrink-0">
        <GithubIcon size_min={24} size_standard={24} link={githubUrl} />
      </div>
    </div>

    {/* Tech badges */}
    <div className="flex flex-col gap-y-2">
      {tech.map(({ label, icon }) => (
        <TechBadges key={label} label={label} icon={icon} />
      ))}
    </div>

    {/* Description */}
    <p className="mt-auto pt-2 text-center text-sm font-extrabold tracking-tight text-stone-300 sm:text-base">
      {description}
    </p>
  </article>
)

// ─── Section ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section
      id="sect_x_projects"
      aria-labelledby="projects-heading"
      className="px-4 mb-12 sm:px-4 md:px-8"
    >
      <h2
        id="projects-heading"
        className="pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
      >
        <span className="text-color-main">Pro</span>
        jektek
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects