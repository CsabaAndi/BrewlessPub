import { GithubIcon } from '../Icons/SocialIcons'
import * as Icons from '../Icons/ProjectIcons'
import { TechBadgeProps } from './about.interface'

// ─── Data ────────────────────────────────────────────────────────────────────

const TECH_STACK: TechBadgeProps[] = [
    { label: 'Python', icon: Icons.PythonIcon },
    { label: 'NumPy', icon: Icons.NumpyIcon },
    { label: 'TensorFlow', icon: Icons.TensorFlowIcon },
    { label: 'Pandas', icon: Icons.PandasIcon },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const TechBadge: React.FC<TechBadgeProps> = ({ label, icon: Icon }) => (
    <div className="flex items-center gap-x-3 rounded-xl bg-stone-800 px-3 py-2 shadow-lg shadow-black/30">
        <Icon size_min={16} size_standard={28} />
        <span className="text-xs font-extrabold tracking-tight text-stone-200 sm:text-sm">
            {label}
        </span>
    </div>
)

// ─── Section ─────────────────────────────────────────────────────────────────

function Thesis() {
    return (
        <section id="sect_xy_thesis" aria-labelledby="thesis-heading" className="px-4 mb-12 sm:px-4 md:px-8">
            <h2 id="thesis-heading" className="pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
                <span className="text-color-main">Szak</span>
                dolgozat
            </h2>
            <div className="mx-auto max-w-3xl rounded-xl border-2 border-color-main bg-stone-800 p-4 shadow-xl shadow-black/30 sm:p-6">
                <div className="flex items-start justify-between gap-x-4 mb-4">
                    <h3 className="text-base font-extrabold tracking-tight text-stone-200 sm:text-lg">
                        &ldquo;Gépi tanulás és mély tanulás alkalmazása a labdarúgásban&rdquo;
                    </h3>
                    <div className="shrink-0">
                        <GithubIcon
                            size_min={24}
                            size_standard={32}
                            link="https://github.com/CsabaAndi/Szakdolgozat-Thesis"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <div className="flex flex-col gap-y-2 sm:col-span-1">
                        {TECH_STACK.map((tech) => (
                            <TechBadge key={tech.label} {...tech} />
                        ))}
                    </div>
                    <div className="sm:col-span-3 rounded-xl border-2 border-color-main bg-stone-900 p-4 sm:p-6 shadow-xl shadow-black/30">
                        <p className="mb-3 text-center font-bold text-stone-200">
                            Folyamatban <span className="text-yellow-500">!</span>
                        </p>
                        <ul className="space-y-3 text-sm text-stone-300 list-disc list-inside">
                            <li>
                                Cél: minél pontosabb modellek alkotása labdarúgás meccsek
                                eredményének predikciójára.
                            </li>
                            <li>
                                Adatok gyűjtése, feldolgozása, elemzése és vizualizációja.
                            </li>
                            <li>
                                Predikciós modellek alkotása gépi tanulás és mély tanulás
                                alkalmazásával.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Thesis