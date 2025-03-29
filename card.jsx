import React from 'react';

const Card = ({ name, image, profession, socialLinks, theme }) => {
    // Inline styles or CSS variables for dynamic theming
    const cardStyle = {
        backgroundColor: theme?.background || '#fff',
        color: theme?.textColor || '#000',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '10px',
    };

    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
    };

    const socialIconStyle = {
        margin: '0 5px',
        textDecoration: 'none',
        fontSize: '20px',
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h3>{name}</h3>
            <p>{profession}</p>
            <div>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...socialIconStyle, color: theme?.iconColor || '#000' }}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Card;
