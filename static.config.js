import projectsData from './src/data/projectsData';

export default {
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'portfolio baumzeit',
  }),
  getRoutes: () => [
    {
      path: '/projects',
      getData: () => ({
        projectsData
      }),
    }
  ]
};
