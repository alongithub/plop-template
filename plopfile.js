// plop 入口问及那

module.exports = plop => {
    plop.setGenerator('static', { // 模板名称
        description: 'create static component',
        prompts: [ // 询问用户输入
            {
                type: 'input',
                name: 'name',
                message: 'static component name',
            },
        ],
        actions: [ // 完成交互后执行的动作
            {
                type: 'add', // 添加文件
                path: 'src/{{name}}/index.html', // 创建后文件路径
                templateFile: 'plop-templates/static-components/index.hbs' // 模板文件路径
            },
            {
                type: 'add', // 添加文件
                path: 'src/{{name}}/css/index.css',
                templateFile: 'plop-templates/static-components/css/style.hbs'
            },
            {
                type: 'add', // 添加文件
                path: 'src/{{name}}/js/index.js',
                templateFile: 'plop-templates/static-components/js/index.hbs'
            },
        ]
    })
}