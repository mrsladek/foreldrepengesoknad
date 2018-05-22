const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.config.dev');
webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
const configureDevServer = require('../webpack/devserver.config');

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(
    compiler,
    configureDevServer({
        NAV_SCRIPTS: '',
        NAV_STYLES: '',
        NAV_HEADING: '',
        NAV_FOOTER: ''
    })
);

server.listen(8080, '0.0.0.0', () =>
    console.log('Started server on http://localhost:8080')
);
