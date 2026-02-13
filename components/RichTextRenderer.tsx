import React from 'react';
import ReactMarkdown from 'react-markdown';

interface RichTextRendererProps {
    text: string;
    className?: string;
    size?: 'sm' | 'base' | 'lg';
    theme?: 'light' | 'dark';
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ text, className = '', size = 'base', theme = 'light' }) => {
    const sizeClasses = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg'
    };

    const isDark = theme === 'dark';

    return (
        <div className={`rich-text-content ${sizeClasses[size]} ${className}`}>
            <ReactMarkdown
                components={{
                    strong: ({ node, ...props }) => <span className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`} {...props} />,
                    h1: ({ node, ...props }) => <h3 className={`block font-black ${isDark ? 'text-white' : 'text-slate-900'} text-lg mt-4 mb-2`} {...props} />,
                    h2: ({ node, ...props }) => <h4 className={`block font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'} text-base mt-3 mb-1`} {...props} />,
                    h3: ({ node, ...props }) => <h5 className={`block font-bold ${isDark ? 'text-slate-300' : 'text-slate-800'} text-sm mt-2 mb-1 uppercase tracking-wide`} {...props} />,
                    p: ({ node, ...props }) => <p className="mb-2 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-4 space-y-1 my-2" {...props} />,
                    li: ({ node, ...props }) => <li className={`pl-1 marker:${isDark ? 'text-slate-500' : 'text-slate-400'}`} {...props} />
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    );
};
