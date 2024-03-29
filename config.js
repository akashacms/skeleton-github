

'use strict';

const akasha  = require('akasharender');

const config = new akasha.Configuration();

config.configDir = __dirname;

config
    .addAssetsDir('assets')
    .addAssetsDir({
        src: 'node_modules/bootstrap/dist',
        dest: 'vendor/bootstrap'
    })
   .addAssetsDir({
        src: 'node_modules/jquery/dist',
        dest: 'vendor/jquery'
    })
    .addLayoutsDir('layouts')
    .addDocumentsDir('documents')
    .addPartialsDir('partials')
    // This is for generating the site as Github Pages
    .setRenderDestination('docs');

config.rootURL("https://akashacms.github.io/skeleton-github/");

config
    .use(require('@akashacms/theme-bootstrap'))
    .use(require('@akashacms/plugins-base'), {
        generateSitemapFlag: true
    })
    .use(require('@akashacms/plugins-breadcrumbs'))
    .use(require('@akashacms/plugins-booknav'))
    .use(require('@akashacms/plugins-embeddables'))
    .use(require('@akashacms/plugins-blog-podcast'), {
        bloglist: {
            news: {
                rss: {
                    title: "AkashaCMS Example Blog",
                    description: "Skeleton blog for use with AkashaCMS",
                    site_url: "http://blog-skeleton.akashacms.com/blog/index.html",
                    image_url: "http://akashacms.com/logo.gif",
                    managingEditor: 'David Herron',
                    webMaster: 'David Herron',
                    copyright: '2015 David Herron',
                    language: 'en',
                    categories: [ "Node.js", "Content Management System", "HTML5", "Static website generator" ]
                },
                rssurl: "/blog/rss.xml",
                rootPath: "blog",
                matchers: {
                    layouts: [ "blog.html.ejs" ],
                    path: /^blog\//
                }
            }
        }
    });

config
    .addFooterJavaScript({ href: "/vendor/jquery/jquery.min.js" })
    .addFooterJavaScript({ href: "/vendor/bootstrap/js/bootstrap.min.js" })
    .addStylesheet({ href: "/vendor/bootstrap/css/bootstrap.min.css" })
    .addStylesheet({ href: "/vendor/bootstrap/css/bootstrap-theme.min.css" })
    .addStylesheet({ href: "/style.css" });

config.setMahabhutaConfig({
    recognizeSelfClosing: true,
    recognizeCDATA: true
});

// config.addMahabhuta(require('./mahafuncs'));

config.prepare();

module.exports = config;
