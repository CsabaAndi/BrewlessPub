/* Header */
export interface NavLink {
    label: string
    sectionId: string
}

export interface HeaderProps {
    name?: { first: string; last: string }
    navLinks?: NavLink[]
}