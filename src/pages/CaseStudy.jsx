import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCMS } from '../cms/CmsContext';
import { CaseStudyHeader } from '../components/CaseStudy/CaseStudyHeader';
import { TableOfContents } from '../components/CaseStudy/TableOfContents';
import { GroupedSectionRenderer } from '../components/CaseStudy/SectionRenderer';
import { Footer } from '../components/Footer/Footer';

export const CaseStudy = () => {
  const { slug } = useParams();
  const { projects } = useCMS();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="case-study-page">
        <div
          className="case-study-container"
          style={{ textAlign: 'center', paddingTop: '100px' }}
        >
          <h1
            className="case-study-title"
            style={{ marginBottom: '16px' }}
          >
            Project not found
          </h1>
          <p className="block-paragraph" style={{ marginBottom: '24px' }}>
            The case study "{slug}" doesn't exist in CMS.
          </p>
          <Link to="/" className="text-link">← Return to home</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="case-study-page">
      <div className="case-study-container">
        {/* Fixed sticky TOC sidebar (desktop only, controlled via CSS) */}
        <TableOfContents blocks={project.blocks} />

        {/* Case Study Header — includes mobile back link */}
        <CaseStudyHeader project={project} />

        {/* Content blocks — grouped for correct spacing:
            40px between sections, 16px heading→content, 8px intra */}
        <div className="case-study-blocks">
          <GroupedSectionRenderer blocks={project.blocks} />
        </div>

        <div style={{ marginTop: '40px' }}>
          <Footer />
        </div>
      </div>
    </article>
  );
};
