import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import ResearchSection from '../components/sections/ResearchSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import AwardsSection from '../components/sections/AwardsSection';
import TeachingSection from '../components/sections/TeachingSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from public/data.json
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-[var(--color-text-gray)]">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Error Loading Data</h2>
          <p className="text-(--color-text-gray)">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <Layout socialLinks={data.socialLinks}>
      <HeroSection personal={data.personal} hero={data.hero} />
      <AboutSection personal={data.personal} />
      <EducationSection education={data.education} />
      <ResearchSection research={data.research} />
      <ProjectsSection projects={data.projects} />
      <SkillsSection skills={data.skills} />
      <PublicationsSection publications={data.publications} />
      <AwardsSection awards={data.awards} />
      <TeachingSection teaching={data.teaching} />
      <ContactSection
        contact={data.contact}
        socialLinks={data.socialLinks}
        personal={data.personal}
      />
    </Layout>
  );
};

export default Home;