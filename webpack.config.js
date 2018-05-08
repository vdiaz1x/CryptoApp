// using ebpack config from class work

/**
  @author Jason Seminara <js@ga.co>
  @description GA's Custom webpack config for most React apps
  @since 2017-06-01
*/
const webpack            = require('webpack');
const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlTemplate       = require('html-webpack-template');

const { webpackConfig } = require('./package');


const fontLoaderConfig = {
  name:  '/fonts/[name].[ext]',
  limit: 100,
};

// let's bring in local environmental variables
if (!('NODE_ENV' in process.env)) require('dotenv').config();

module.exports = {
  entry: {
    main: path.resolve(__dirname, webpackConfig.main),
  },
  output: {
    path:     path.resolve(__dirname, webpackConfig.outputDir),
    filename: 'js/[name].js',
  },
  cache:   true,
  devtool: 'inline-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks:  {
      cacheGroups: {
        default: false,
        commons: {
          test:    /node_modules/,
          name:    'vendors',
          minSize: 1,
          chunks:  'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.LoaderOptionsPlugin({
      debug: false,
    }),
    new HtmlWebpackPlugin({
      ...webpackConfig.html,
      xhtml:    true,
      inject:   false,
      template: htmlTemplate,
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader!sass-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        use:  [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader',
        }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.ico$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/font-woff',
          },
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/octet-stream',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'file-loader',
          options: fontLoaderConfig,
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'mimetype=image/svg+xml',
          },
        }],
      },
    ],
  },
};
