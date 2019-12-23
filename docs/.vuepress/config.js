module.exports = {
    title: 'IM开发文档',
    description: '使用 vue + ts + 网易云信web sdk开发的一个即时聊天工具',
    base: '/',
    themeConfig: {
        nav: [
            { text: '开发', link: '/dev' },
            { text: '部署', link: '/deploy' },
            {
                text: '注意事项',
                link: '/note',
                items: [
                    { text: 'eventBus', link: '/note/eventBus' },
                    { text: 'store', link: '/note/store' }
                ]
            }
        ],
        sidebarDepth: 3
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    ga: '',
    evergreen: true,
    dest: './docs/.vuepress/dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '/docs/'
            }
        }
    }
}