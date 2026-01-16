import React, { useState } from 'react';

type StepStatus = 'completed' | 'in-progress' | 'not-started';

interface StatusStep {
  label: string;
  status: StepStatus;
  linkText?: string;
  timestamp?: string;
  iconColor?: string;
}

interface LibraryStatusSectionProps {
  steps?: StatusStep[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const LibraryStatusSection: React.FC<LibraryStatusSectionProps> = ({ 
  steps, 
  isExpanded = false,
  onToggle 
}) => {

  // Default steps if none provided
  const defaultSteps: StatusStep[] = [
    { label: 'Ingesting data into Data Cloud', status: 'in-progress', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
    { label: 'Creating data lake objects', status: 'in-progress', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
    { label: 'Mapping data lake objects to data model objects', status: 'in-progress', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
    { label: 'Indexing data and creating a search index', status: 'in-progress', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
    { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
  ];

  const statusSteps = steps || defaultSteps;
  
  // Check if all steps are completed
  const allStepsCompleted = statusSteps.every(step => step.status === 'completed');
  
  // Get the last step (retriever) for collapsed summary
  const retrieverStep = statusSteps[statusSteps.length - 1];

  const renderStepIcon = (status: StepStatus, index: number) => {
    const size = 24;
    const strokeWidth = 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    if (status === 'completed') {
      return (
        <div style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          borderRadius: '50%',
          backgroundColor: '#2e844a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path 
              d="M3 7L6 10L11 4" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    } else if (status === 'in-progress') {
      // Progress ring for all in-progress steps
      return (
        <div style={{ width: `${size}px`, height: `${size}px`, position: 'relative' }}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#e0e0e0"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#0176d3"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * 0.5}
              style={{
                animation: 'progress-spin 2s linear infinite'
              }}
            />
          </svg>
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes progress-spin {
                0% {
                  stroke-dashoffset: ${circumference};
                }
                50% {
                  stroke-dashoffset: ${circumference * 0.25};
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `
          }} />
        </div>
      );
    } else {
      // not-started - empty ring
      return (
        <div style={{ width: `${size}px`, height: `${size}px` }}>
          <svg width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#c9c9c9"
              strokeWidth={strokeWidth}
            />
          </svg>
        </div>
      );
    }
  };

  // Skeleton loading component
  const renderSkeleton = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {/* Icon skeleton */}
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '4px',
          backgroundColor: '#e0e0e0',
          animation: 'skeleton-pulse 1.5s ease-in-out infinite'
        }} />
        {/* Text skeleton */}
        <div style={{
          width: '120px',
          height: '14px',
          borderRadius: '4px',
          backgroundColor: '#e0e0e0',
          animation: 'skeleton-pulse 1.5s ease-in-out infinite'
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes skeleton-pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.5;
              }
            }
          `
        }} />
      </div>
    );
  };

  return (
    <article className="slds-card" style={{ marginBottom: '1rem' }}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <button 
              className="slds-button slds-button_reset"
              onClick={onToggle}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="#706e6b"
                style={{ 
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.2s',
                  flexShrink: 0
                }}
              >
                <path d="M4 2l4 4-4 4V2z"/>
              </svg>
              <h2 style={{ margin: 0, fontSize: '0.875rem', fontWeight: '700', color: '#080707' }}>
                Library Status
              </h2>
            </button>
          </div>
        </header>
      </div>

      {!isExpanded && allStepsCompleted && (
        <div className="slds-card__body slds-card__body_inner" style={{ padding: '0.75rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#080707' }}>
                  Retriever Action
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="#706e6b">
                  <path d="M7 1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm.5-6h-1v2.5h-1.5v1h1.5V11h1V8.5h1.5v-1H7.5V5z"/>
                </svg>
              </div>
              <span style={{ fontSize: '0.875rem', color: '#080707' }}>
                {retrieverStep.linkText?.replace(/ /g, '_')}_retriever_Action
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isExpanded && (
        <div className="slds-card__body slds-card__body_inner">
          {/* Description */}
          <div className="slds-text-body_regular slds-m-bottom_large">
            See when your data library is building or ready to test and use with agents. For each completed step, click the link to go to the relevant item in Data Cloud. If you add or update data in your data library, your search index is refreshed. Check the timestamp to make sure you're using the latest search index.
          </div>

          {/* Progress Steps */}
          <div className="slds-m-bottom_large">
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {statusSteps.map((step, index) => (
                <li 
                  key={index} 
                  style={{ 
                    position: 'relative',
                    paddingBottom: index < statusSteps.length - 1 ? '1.5rem' : '0',
                    paddingLeft: '2rem'
                  }}
                >
                  {/* Connecting Line */}
                  {index < statusSteps.length - 1 && (
                    <div 
                      style={{
                        position: 'absolute',
                        left: '11px',
                        top: '24px',
                        bottom: '0',
                        width: '2px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Base line - always dotted gray */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'repeating-linear-gradient(to bottom, #c9c9c9 0px, #c9c9c9 4px, transparent 4px, transparent 8px)'
                      }} />
                      
                      {/* Animated filling green line - only when current step is completed AND next step is NOT started yet */}
                      {step.status === 'completed' && statusSteps[index + 1].status === 'not-started' && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: '#2e844a',
                          transformOrigin: 'top',
                          animation: 'line-fill 0.8s ease-out forwards'
                        }} />
                      )}
                      
                      {/* Solid green line - shows when next step is in-progress or both steps are completed */}
                      {step.status === 'completed' && (statusSteps[index + 1].status === 'in-progress' || statusSteps[index + 1].status === 'completed') && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: '#2e844a'
                        }} />
                      )}
                      
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          @keyframes line-fill {
                            0% {
                              transform: scaleY(0);
                            }
                            100% {
                              transform: scaleY(1);
                            }
                          }
                        `
                      }} />
                    </div>
                  )}
                  
                  {/* Step Icon */}
                  <div style={{ position: 'absolute', left: '0', top: '0' }}>
                    {renderStepIcon(step.status, index)}
                  </div>
                  
                  {/* Step Content */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    paddingTop: '2px'
                  }}>
                    <span className="slds-text-body_regular">{step.label}</span>
                    
                    {/* Show skeleton loading during in-progress */}
                    {step.status === 'in-progress' && renderSkeleton()}
                    
                    {/* Show actual content when completed */}
                    {step.status === 'completed' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {step.linkText && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            {step.iconColor && (
                              <span 
                                style={{
                                  display: 'inline-flex',
                                  width: '16px',
                                  height: '16px',
                                  borderRadius: '4px',
                                  backgroundColor: step.iconColor,
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                                  <rect x="2" y="2" width="6" height="6" rx="1" />
                                </svg>
                              </span>
                            )}
                            <a 
                              href="#" 
                              className="slds-text-link"
                              style={{ 
                                color: '#0176d3',
                                textDecoration: 'none',
                                fontWeight: '400',
                                whiteSpace: 'nowrap'
                              }}
                              onClick={(e) => e.preventDefault()}
                            >
                              {step.linkText}
                            </a>
                          </div>
                        )}
                        {step.timestamp && (
                          <span className="slds-text-color_weak slds-text-body_small" style={{ whiteSpace: 'nowrap' }}>
                            {step.timestamp}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Retriever Action Section */}
          {allStepsCompleted && (
            <div className="slds-m-top_large" style={{ paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#080707', margin: 0 }}>
                  Retriever Action
                </h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#0176d3">
                  <path d="M8 1c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm.5 11h-1V7h1v5zm0-6h-1V5h1v1z"/>
                </svg>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#706e6b', margin: 0 }}>
                {retrieverStep.linkText?.replace(/ /g, '_')}_retriever_Action
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
