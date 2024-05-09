import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}
const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

return (
    <div>
        <textarea value={markdown} onChange={handleMarkdownChange} />
        <ReactMarkdown>{capitalizedSentence}</ReactMarkdown>
    </div>
);
const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' }
];

const names = data.map(item => item.name);

console.log(names);
