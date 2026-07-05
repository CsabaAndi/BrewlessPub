//About

export interface InfoItem {
    label: string
    value: string
}

export interface HobbyItem {
    label: string
    description: string
}

//icons
export interface IconComponent {
    size_min: number
    size_standard: number
}

export interface StackItem {
    icon: React.FC<IconComponent>
    label: string
}

export interface StackGroupProps {
    name: string
    items: StackItem[]
}

export interface TextStackItem {
    label: string
}

export interface TextStackGroupProps {
    name: string
    items: TextStackItem[]
}

//education 

export interface Experience {
    startYear: string | number
    endYear: number | 'present' | 'ongoing' | ''
    location: string
    description: string
}

export interface ExperienceGroupProps {
    heading: { colored: string; rest: string }
    items: Experience[]
    className?: string
}

//thesis
export interface TechBadgeProps {
    label: string
    icon: React.FC<{ size_min: number; size_standard: number }>
}

//projects
export interface TechBadge {
    label: string
    icon: React.FC<{ size_min: number; size_standard: number }>
}

export interface Project {
    title: string
    description: string
    githubUrl: string
    tech: TechBadge[]
}