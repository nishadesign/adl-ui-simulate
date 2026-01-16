import React, { useState } from 'react';

export const SetupTree: React.FC = () => {
  const [isDataExpanded, setIsDataExpanded] = useState(true);
  const [isOptimizationExpanded, setIsOptimizationExpanded] = useState(false);

  return (
    <aside style={{ 
      width: '100%', 
      height: '100vh', 
      backgroundColor: '#ffffff', 
      borderRight: '1px solid #dddbda',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Home Section */}
      <div style={{ 
        padding: '0.75rem 1rem',
        borderBottom: '1px solid #dddbda'
      }}>
        <a href="/index.html" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#080707',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: '400',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#014486'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#080707'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
            <path d="M10.5 2.5l7 5.8v9.2h-4.7v-5.8H7.2v5.8H2.5V8.3l7-5.8h1z"/>
          </svg>
          Home
        </a>
      </div>

      {/* Navigation Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Build Section */}
        <div style={{ padding: '1rem 0' }}>
          <h3 style={{ 
            padding: '0 1rem',
            margin: '0 0 0.5rem 0',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#080707',
            textTransform: 'uppercase',
            letterSpacing: '0.025em'
          }}>
            Build
          </h3>

          <nav>
            {/* Agents */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M10 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 12c-3.3 0-6 1.3-6 3v1h12v-1c0-1.7-2.7-3-6-3zm6-7h2v2h-2v2h-2v-2h-2V7h2V5h2v2z"/>
              </svg>
              Agents
            </a>

            {/* Prompt Templates */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 11h-3v3h-4v-3H5v-4h3V6h4v3h3v4z"/>
              </svg>
              Prompt Templates
              <svg width="12" height="12" viewBox="0 0 12 12" fill="#706e6b" style={{ marginLeft: 'auto' }}>
                <path d="M9.5 2.5L10 3l-4 4-4-4 .5-.5L6 6z"/>
                <path d="M3 8l3 3 3-3H3z"/>
              </svg>
            </a>

            {/* Data (expandable) */}
            <div>
              <button
                onClick={() => setIsDataExpanded(!isDataExpanded)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  width: '100%',
                  color: '#080707',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                  <path d="M16 14H4v-4h12v4zm0-6H4V4h12v4z"/>
                  <path d="M3 3v14h14V3H3zm12 12H5V5h10v10z"/>
                </svg>
                Data
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="#706e6b" 
                  style={{ 
                    marginLeft: 'auto',
                    transform: isDataExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <path d="M6 8L2 4h8L6 8z"/>
                </svg>
              </button>
              {isDataExpanded && (
                <div style={{ paddingLeft: '2.5rem' }}>
                  <a href="/index.html" style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: '#080707',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    backgroundColor: '#e3f3ff',
                    borderLeft: '3px solid #0176d3',
                    fontWeight: '600'
                  }}>
                    Data Libraries
                  </a>
                </div>
              )}
            </div>

            {/* Tests */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M3 3v3h3V3H3zm5 0v3h3V3H8zm5 0v3h3V3h-3zM3 8v3h3V8H3zm5 0v3h3V8H8zm5 0v3h3V8h-3zM3 13v3h3v-3H3zm5 0v3h3v-3H8zm5 0v3h3v-3h-3z"/>
              </svg>
              Tests
            </a>
          </nav>
        </div>

        {/* Observe Section */}
        <div style={{ padding: '1rem 0' }}>
          <h3 style={{ 
            padding: '0 1rem',
            margin: '0 0 0.5rem 0',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#080707',
            textTransform: 'uppercase',
            letterSpacing: '0.025em'
          }}>
            Observe
          </h3>

          <nav>
            {/* Analytics */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M2 16h16v2H2v-2zm2-2h2V8H4v6zm4 0h2V4H8v10zm4 0h2v-4h-2v4zm4 0h2V2h-2v12z"/>
              </svg>
              Analytics
            </a>

            {/* Optimization (expandable) */}
            <div>
              <button
                onClick={() => setIsOptimizationExpanded(!isOptimizationExpanded)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  width: '100%',
                  color: '#080707',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                  <path d="M16 14l-4-4-3 3-5-5v12h12v-6zm-2-8l-2-2H4v12l5-5 3 3 2-2V6z"/>
                </svg>
                Optimization
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="#706e6b" 
                  style={{ 
                    marginLeft: 'auto',
                    transform: isOptimizationExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <path d="M6 8L2 4h8L6 8z"/>
                </svg>
              </button>
              {isOptimizationExpanded && (
                <div style={{ paddingLeft: '2.5rem' }}>
                  <a href="#" style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: '#080707',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Insights
                  </a>
                  <a href="#" style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: '#080707',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Sessions/Intents
                  </a>
                </div>
              )}
            </div>

            {/* Eval */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M16.7 5.3l-1.4-1.4L10 9.2 4.7 3.9 3.3 5.3 10 12l6.7-6.7z"/>
                <path d="M3 14h14v2H3v-2z"/>
              </svg>
              Eval
            </a>

            {/* Consumption Cards */}
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              color: '#080707',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#706e6b">
                <path d="M16 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h12v10zm-10-8h8v2H6V7zm0 3h8v2H6v-2z"/>
              </svg>
              Consumption Cards
            </a>
          </nav>
        </div>
      </div>

      {/* Collapse Button */}
      <div style={{ 
        borderTop: '1px solid #dddbda',
        padding: '0.75rem 1rem'
      }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: '100%',
          padding: '0.5rem',
          color: '#706e6b',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 8L7 4v8l4-4z"/>
            <path d="M5 4v8H3V4h2z"/>
          </svg>
          Collapse
        </button>
      </div>
    </aside>
  );
};
