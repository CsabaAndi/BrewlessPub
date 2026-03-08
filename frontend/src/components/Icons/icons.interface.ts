export interface IconSizeProps {
    size_min: number;
    size_standard: number;
    link?: string;
}

export interface ResponsiveIconWrapperProps {
    size_min: number;
    size_standard: number;
    link?: string;
    title: string;
    children: (size: number) => React.ReactNode;
}