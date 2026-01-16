import React from 'react';

export const DataLibraryInfoCard: React.FC = () => {
  return (
    <article style={{ backgroundColor: '#ffffff', borderRadius: '0.25rem', border: '1px solid #dddbda', padding: '1rem', marginBottom: '1rem' }}>
      <div>
        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem', color: '#080707' }}>
          Boost Your AI with Data
        </h2>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#3e3e3c', marginBottom: '0.5rem' }}>
          Ground generative AI and agent responses in defined data sources when you add an Agentforce Data Library to your features. 
          Use knowledge articles, uploaded files, or web searches to add defined content and ensure accurate agent responses.{' '}
          <a href="#" style={{ color: '#0176d3', textDecoration: 'none' }}>Learn more in Help.</a>
        </p>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#3e3e3c' }}>
          You can further enhance your agent performance, when you clean, structure, and review your content in Intelligent Context.{' '}
          <a href="#" style={{ color: '#0176d3', textDecoration: 'none' }}>Go to Intelligent Context.</a>
        </p>
      </div>
    </article>
  );
};
