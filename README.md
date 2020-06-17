### 小型脚手架工具 plop

用于集成到项目中生成项目中同类型的项目文件
1. 安装到项目依赖中
```
yarn add plop --dev
```
2. 创建入口问及那 plopfile.js

```
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
```

3. 创建模板文件

可以在根目录创建模板文件，模板文件目录没有严格要求，需要与入口文件中一致,模板文件后缀名未hbs

<pre style="background:#000;color: #ccc">
├ plop-templates/ ···············································  模板目录
|  └ static-components/ ·········································  静态组件目录
|     ├ css/ ····················································  css 模板文件夹
|     |  └ style.hbs ············································  css 模板
|     ├ js/ ·····················································  js 模板文件夹
|     |  └ index.hbs ············································  js 模板文件
|     └ index.hbs ···············································  html 模板文件
└ package.json
</pre>
```
// css/style.hbs
.{{name}} {
}
// index.hbs
<html>
    <head>
        <title>{{name}}</title>
    </head>
    <body class="{{name}}">
        {{name}} body
    </body>
</html>
```

4. 使用plop命令快速创建组件
```
yarn plop static
```
输入组件名 home  
<pre style="background:#000;color: #ccc">
$ C:\Users\admin\Desktop\plop-templates\node_modules\.bin\plop static
? static component name home
√  ++ \src\home\index.html
√  ++ \src\home\css\index.css
√  ++ \src\home\js\index.js
Done in 7.45s.
</pre>

可以看到自动创建的组件文件结构  
![](/20200616191859687/20200617061312210.png)
```
// home/css/index.css
.home {   
}

// home/index.html
<html>
    <head>
        <title>home</title>
    </head>
    <body class="home">
        home body
    </body>
</html>
```