import React from 'react';
import Card from './card';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ParentComponent = () => {
    // Sample data for three cards
    const cardData = [
        {
            name: 'John Doe',
            image: 'https://via.placeholder.com/100',
            profession: 'Software Engineer',
            socialLinks: [
                { icon: <FaLinkedin />, url: 'https://www.linkedin.com' },
                { icon: <FaGithub />, url: 'https://github.com' },
            ],
            theme: { background: '#f0f8ff', textColor: '#333', iconColor: '#0077b5' }, // Custom theme
        },
        {
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/100',
            profession: 'Graphic Designer',
            socialLinks: [
                { icon: <FaLinkedin />, url: 'https://www.linkedin.com' },
                { icon: <FaTwitter />, url: 'https://twitter.com' },
            ],
            theme: { background: '#ffe4e1', textColor: '#000', iconColor: '#1da1f2' }, // Custom theme
        },
        {
            name: 'Bob Johnson',
            image: 'https://via.placeholder.com/100',
            profession: 'Product Manager',
            socialLinks: [
                { icon: <FaGithub />, url: 'https://github.com' },
                { icon: <FaTwitter />, url: 'https://twitter.com' },
            ],
            theme: { background: '#d3f9d8', textColor: '#2d2d2d', iconColor: '#00acee' }, // Custom theme
        },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    name={card.name}
                    image={card.image}
                    profession={card.profession}
                    socialLinks={card.socialLinks}
                    theme={card.theme}
                />
            ))}
        </div>
    );
};

export default ParentComponent;
