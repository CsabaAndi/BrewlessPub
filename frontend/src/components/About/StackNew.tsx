import * as Icons from '../Icons/ProjectIcons'
import * as HardwareIcons from '../Icons/HardwareIcon'
import * as DCIcons from '../Icons/DataCloudIcons'
import { StackItem, StackGroupProps } from './about.interface'
// do this to other interface imports as well
// ─── Data ────────────────────────────────────────────────────────────────────

const STACK_GROUPS: { name: string; items: StackItem[] }[] = [
    {
        name: 'Backend & Frontend',
        items: [
            { icon: Icons.PythonIcon, label: 'Python' },
            { icon: Icons.JavaScriptIcon, label: 'JavaScript' },
            { icon: Icons.TypeScriptIcon, label: 'TypeScript' },
            { icon: Icons.JavaIcon, label: 'Java' },
            { icon: Icons.ReactIcon, label: 'React' },
            { icon: Icons.TailwindIcon, label: 'Tailwind CSS' },
            { icon: Icons.AngularIcon, label: 'Angular' },
            { icon: Icons.NodeJsIcon, label: 'Node.js' },
        ],
    },
    {
        name: 'Database & Cloud',
        items: [
            { icon: DCIcons.PostgreSQLIcon, label: 'PostgreSQL' },
            { icon: DCIcons.SQLIcon, label: 'SQL' },
            { icon: DCIcons.FirebaseIcon, label: 'Firebase' },
            { icon: DCIcons.AWSIcon, label: 'AWS' },
        ],
    },
    {
        name: 'Operating Systems & Privacy',
        items: [
            { icon: HardwareIcons.LinuxIcon, label: 'Linux' },
            { icon: HardwareIcons.WinIcon, label: 'Windows' },
            { icon: HardwareIcons.AndroidIcon, label: 'Android' },
            { icon: HardwareIcons.TwoFactor, label: '2FA' },
        ],
    },
]

// ─── Components ──────────────────────────────────────────────────────────────

const StackGroup: React.FC<StackGroupProps> = ({ name, items }) => (
    <div className="p-2">
        <h3 className="text-center text-sm font-extrabold tracking-tight text-stone-400 uppercase sm:text-xs">
            {name}
        </h3>

        <div className="mt-3 flex flex-wrap justify-center gap-4 rounded-xl bg-stone-800 px-3 py-4 shadow-xl shadow-black/30 md:gap-8 sm:px-4 sm:py-5">
            {items.map(({ icon: Icon, label }) => (
                <div
                    key={label}
                    title={label}
                    aria-label={label}
                    className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                >
                    <Icon size_min={16} size_standard={32} />
                </div>
            ))}
        </div>
    </div>
)

// ─── Section ─────────────────────────────────────────────────────────────────

function StackNew() {
    return (
        <section
            id="sect_3_stacknew"
            aria-labelledby="stack-heading"
            className="px-4 mb-0 sm:px-4 md:px-8"
        >
            <h2
                id="stack-heading"
                className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
            >
                <span className="text-color-main">Szak</span>
                mai ismeretek
            </h2>

            <div className="space-y-4 rounded-xl px-2 py-4 sm:p-6">
                {STACK_GROUPS.map((group) => (
                    <StackGroup key={group.name} name={group.name} items={group.items} />
                ))}
            </div>
        </section>
    )
}

export default StackNew