export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6099e84a8a781c2be890a363',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-io62h4nd',
                  apiId: 'a7880376-dc4c-4e39-b2e4-9aec7829e8eb'
                },
                {
                  buildHookId: '6099e8496344802daf2afa19',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-28zqg55c',
                  apiId: '7b4fcdf6-7582-484c-a035-abde312f8167'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elarsenBoz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-28zqg55c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
