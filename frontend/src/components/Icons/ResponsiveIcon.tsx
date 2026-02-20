import { ResponsiveIconWrapperProps } from "./icons.interface";


export function ResponsiveIcon({ size_min, size_standard, link, title, children }: ResponsiveIconWrapperProps) {
    if (size_min === size_standard) {
        const content = link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
                {children(size_standard)}
            </a>
        ) : (
            <span title={title}>{children(size_standard)}</span>
        );
        return <div>{content}</div>;
    }

    const sizes = [
        { size: size_min, className: 'flex sm:hidden' },
        { size: size_standard, className: 'hidden sm:flex' },
    ];

    return (
        <>
            {sizes.map(({ size, className }) => (
                <div key={className} className={className}>
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
                            {children(size)}
                        </a>
                    ) : (
                        <span title={title}>{children(size)}</span>
                    )}
                </div>
            ))}
        </>
    );
}