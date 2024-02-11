import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';

const TestimonialCard = ({ name, position, comment, imageSrc }) => {
  return (
    <section style={{ width: '100%', padding: '96px 0', boxSizing: 'border-box' }}>
      <div style={{ margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div>
            <div style={{ display: 'inline-block', borderRadius: '8px', background: '#F3F4F6', padding: '6px 12px', fontSize: '1rem', color: '#1F2937', border: '1px solid #E5E7EB' }}>Pick Your Plan</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '16px' }}>Simple, transparent pricing.</h2>
            <p style={{ maxWidth: '600px', color: '#6B7280', fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '32px', dark: { color: '#9CA3AF' } }}>
              Upgrade your experience with our premium features. Choose the plan that's right for you.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '32px', maxWidth: '960px', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', borderRadius: '8px', background: '#F3F4F6', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Basic</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1F2937' }}>$19</p>
            <ul style={{ display: 'grid', gap: '8px', paddingTop: '16px', fontSize: '1rem', color: '#6B7280', dark: { color: '#9CA3AF' } }}>
              <li>Unlimited projects</li>
              <li>3 team members</li>
              <li>100GB of storage</li>
            </ul>
            <a
              style={{
                display: 'inline-flex',
                height: '3rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.375rem',
                border: '1px solid #E5E7EB',
                backgroundColor: '#fff',
                color: '#1F2937',
                fontSize: '1rem',
                fontWeight: 'medium',
                textDecoration: 'none',
                transition: 'background-color 0.3s, color 0.3s',
                hover: { backgroundColor: '#F9FAFB' },
                focus: { outline: '2px solid transparent', outlineOffset: '2px' },
                disabled: { pointerEvents: 'none', opacity: '0.5' },
                dark: {
                  border: '1px solid #4B5563',
                  backgroundColor: '#1F2937',
                  color: '#D1D5DB',
                  hover: { backgroundColor: '#1E2937' },
                },
              }}
              href="#"
            >
              Choose Basic
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', borderRadius: '8px', background: '#F3F4F6', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Pro</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1F2937' }}>$49</p>
            <ul style={{ display: 'grid', gap: '8px', paddingTop: '16px', fontSize: '1rem', color: '#6B7280', dark: { color: '#9CA3AF' } }}>
              <li>Unlimited projects</li>
              <li>10 team members</li>
              <li>500GB of storage</li>
            </ul>
            <a
              style={{
                display: 'inline-flex',
                height: '3rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.375rem',
                backgroundColor: '#1F2937',
                color: '#D1D5DB',
                fontSize: '1rem',
                fontWeight: 'medium',
                textDecoration: 'none',
                transition: 'background-color 0.3s, color 0.3s',
                hover: { backgroundColor: '#1E2937' },
                focus: { outline: '2px solid transparent', outlineOffset: '2px' },
                disabled: { pointerEvents: 'none', opacity: '0.5' },
              }}
              href="#"
            >
              Choose Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
