import { Experience, ExperienceGroupProps } from "./about.interface"


/// lang files


//const { t } = useTranslation()
//const education = t('education.items', { returnObjects: true }) as Experience[]
//const languages = t('languages.items', { returnObjects: true }) as Experience[]

//const eduHeading = t('education.heading', { returnObjects: true }) as { colored: string, rest: string }
//const langHeading = t('languages.heading', { returnObjects: true }) as { colored: string, rest: string }

///////////////////////

// Temporary
const education: Experience[] = [
    { startYear: 2019, endYear: 'present', location: 'Szegedi Tudományegyetem', description: 'Mérnökinformatikus BSc' },
    { startYear: 2015, endYear: 2019, location: 'Szekszárdi I. Béla Gimnázium', description: 'Érettségi' },
]

const languages: Experience[] = [
    { startYear: 2019, endYear: '', location: 'Szekszárd', description: 'English intermediate language exam' },
]

const eduHeading = { colored: 'Tan', rest: 'ulmányok' }
const langHeading = { colored: 'Lan', rest: 'guages' }

// Temporary

const ExperienceRow: React.FC<Experience> = ({ startYear, endYear, location, description }) => (
    <li className="border-b border-l border-stone-700 last:border-b-0">
        <div className="-ml-2 pt-3 flex items-center gap-x-2">
            <span className="whitespace-nowrap rounded-full border border-color-main bg-stone-900 px-2 py-1 text-xs sm:text-sm font-bold text-white shadow-xl shadow-black/30">
                {startYear}
                {endYear !== '' ? ` – ${endYear}` : ''}
            </span>
            <span className="text-sm font-medium text-stone-400">{location}</span>
        </div>
        <p className="p-3 text-base sm:text-xl font-bold text-stone-200">
            {description}
        </p>
    </li>
)

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({ heading, items, className = '' }) => (
    <div className={`col-span-1 ${className}`}>
        <h2 className="pb-4 sm:pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
            <span className="text-color-main">{heading.colored}</span>
            {heading.rest}
        </h2>
        <ul className="md:ml-4 md:mr-4 lg:ml-0 lg:px-6 xl:px-12">
            {items.map((item) => (
                <ExperienceRow key={`${item.startYear}-${item.description}`} {...item} />
            ))}
        </ul>
    </div>
)

function Education() {
    return (
        <section id="sect_4_edu" aria-labelledby="edu-heading" className="px-4 mb-12 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ExperienceGroup heading={eduHeading} items={education} />
                <ExperienceGroup heading={langHeading} items={languages} className="lg:px-12 lg:justify-self-end" />
            </div>
        </section>
    )
}

export default Education