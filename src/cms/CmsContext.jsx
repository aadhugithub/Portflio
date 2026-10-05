import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultSiteData } from './defaultData';

const CMS_STORAGE_KEY = 'adarsh_portfolio_cms_v1';

const CmsContext = createContext(null);

export const CmsProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(() => {
    try {
      const saved = localStorage.getItem(CMS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure structure integrity by merging with defaults
        return {
          ...defaultSiteData,
          ...parsed,
          profile: { ...defaultSiteData.profile, ...(parsed.profile || {}) },
          about: { ...defaultSiteData.about, ...(parsed.about || {}) },
          footer: { ...defaultSiteData.footer, ...(parsed.footer || {}) },
          projects: Array.isArray(parsed.projects) ? parsed.projects : defaultSiteData.projects,
          connect: Array.isArray(parsed.connect) ? parsed.connect : defaultSiteData.connect
        };
      }
    } catch (e) {
      console.error('Failed to load CMS data from localStorage:', e);
    }
    return defaultSiteData;
  });

  const [isCmsOpen, setIsCmsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Persist changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(siteData));
    } catch (e) {
      console.error('Failed to persist CMS data to localStorage:', e);
    }
  }, [siteData]);

  // CMS update methods
  const updateProfile = (profileData) => {
    setSiteData((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profileData }
    }));
  };

  const updateAbout = (aboutData) => {
    setSiteData((prev) => ({
      ...prev,
      about: { ...prev.about, ...aboutData }
    }));
  };

  const updateProjects = (projectsList) => {
    setSiteData((prev) => ({
      ...prev,
      projects: projectsList
    }));
  };

  const updateProject = (projectIdOrSlug, updatedProject) => {
    setSiteData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === projectIdOrSlug || p.slug === projectIdOrSlug ? { ...p, ...updatedProject } : p
      )
    }));
  };

  const addProject = (newProject) => {
    setSiteData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const deleteProject = (projectIdOrSlug) => {
    setSiteData((prev) => ({
      ...prev,
      projects: prev.projects.filter(
        (p) => p.id !== projectIdOrSlug && p.slug !== projectIdOrSlug
      )
    }));
  };

  const reorderProjects = (startIndex, endIndex) => {
    setSiteData((prev) => {
      const result = Array.from(prev.projects);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return { ...prev, projects: result };
    });
  };

  const updateConnect = (connectList) => {
    setSiteData((prev) => ({
      ...prev,
      connect: connectList
    }));
  };

  const updateFooter = (footerData) => {
    setSiteData((prev) => ({
      ...prev,
      footer: { ...prev.footer, ...footerData }
    }));
  };

  const resetToDefaults = () => {
    setSiteData(defaultSiteData);
    try {
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(defaultSiteData));
    } catch (e) {
      console.error('Failed to reset localStorage:', e);
    }
  };

  const importData = (importedJson) => {
    try {
      const parsed = typeof importedJson === 'string' ? JSON.parse(importedJson) : importedJson;
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Invalid JSON format');
      }
      setSiteData({
        ...defaultSiteData,
        ...parsed
      });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const exportData = () => {
    return JSON.stringify(siteData, null, 2);
  };

  return (
    <CmsContext.Provider
      value={{
        siteData,
        profile: siteData.profile,
        about: siteData.about,
        projects: siteData.projects,
        connect: siteData.connect,
        footer: siteData.footer,
        updateProfile,
        updateAbout,
        updateProjects,
        updateProject,
        addProject,
        deleteProject,
        reorderProjects,
        updateConnect,
        updateFooter,
        resetToDefaults,
        importData,
        exportData,
        isCmsOpen,
        setIsCmsOpen,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCMS must be used within a CmsProvider');
  }
  return context;
};
