export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6e3900f8f3c881f5115a11',
                  title: 'Sanity Studio',
                  name: 'delightful-dog-studio',
                  apiId: '0b253594-cc8a-4abf-9958-3abb8a23e007'
                },
                {
                  buildHookId: '5e6e3900e5e8e0ad295986cb',
                  title: 'Blog Website',
                  name: 'delightful-dog',
                  apiId: '0cc548ab-0f6b-4767-8cfe-bbb5cd4dc8cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottrollan/delightful-dog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://delightful-dog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
