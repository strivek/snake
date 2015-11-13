/**
 * @file config配置文件
 * @author gaofei
 * @date 2015-11-12
 * @todo 增加Push到远程机器配置
 */
// 加载smarty
fis.require('smarty')(fis);
// 命名空间设置
fis.set('namespace', 'select');
fis
    .media('dev').match('*', {
        useHash: false,
        optimizer: null
    })
    .match('**.{jsx,js}', {
        isMod: true
    })
    .match('/static/assets/lib/**.js', {
        isMod: true
    })
    .match('/static/assets/lib/mod.js', {
        isMod: false
    })
    .match('/static/*.jsx', {
        isMod: false
    })
    .hook('commonjs')
    .match('{*.jsx,*:jsx}', {
        parser: fis.plugin('babel2'),
        rExt: '.js'
    });
