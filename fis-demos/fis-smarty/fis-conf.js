/**
 * @file config配置文件
 * @author gaofei
 * @date 2015-11-12
 * @todo 增加Push到远程机器配置
 */
// 加载smarty
fis.require('smarty')(fis);
// 命名空间设置
fis
    .set('namespace', 'selectGroup')
    .media('dev').match('*', {
        useHash: false,
        optimizer: null
    })
    .match('**.js', {
        isMod: true
    })
    .match('static/assets/lib/**.js', {
        isMod: false
    })
    .match('**.jsx', {
        isMod: true
    })
    .hook('commonjs')
    .match('::package', {
        postpackager: fis.plugin('loader')
    })
    .match('{*.jsx,*:jsx}', {
        parser: fis.plugin('babel2'),
        rExt: '.js'
    });
