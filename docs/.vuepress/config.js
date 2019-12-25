const devSidebar = () => {
    const config = [{
        title: '开发',
        collapsable: false,
        children: [
            '/dev/env',
            '/dev/base'
        ]
    }]
    return config;
}
module.exports = {
    title: 'IM开发文档',
    description: '使用 vue + ts + 网易云信web sdk开发的一个即时聊天工具',
    base: '/',
    themeConfig: {
        nav: [
            { text: '开发', link: '/dev/index' },
            { text: '部署', link: '/deploy/index' },
            {
                text: '注意事项',
                items: [
                    { text: 'eventBus', link: '/note/eventBus' },
                    { text: 'store', link: '/note/store' }
                ]
            }
        ],
        sidebar: {
            '/dev/': devSidebar()
        }
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
