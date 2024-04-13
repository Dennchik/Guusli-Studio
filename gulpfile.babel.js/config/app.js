import TerserPlugin from 'terser-webpack-plugin';
import pugbem from "gulp-pugbem";
import imagemin from "gulp-imagemin";

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	webpackReact: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
		},
		entry: {
			smoothscrolling: './#src/js/assets/smooth-scrolling.jsx',
			appreact: './#src/js/assets/app-react.jsx',
		},
		output: {
			filename: '[name].min.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
					],
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						"style-loader",
						"css-loader",
						'sass-loader'   // компилирует Sass в CSS
					]
				},
				{
					test: /\.(png|jpe?g|gif|webp)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images', // папка, куда будут сохранены изображения
							},
						},

					]
				}
			],
		},

	},
	webpack: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
			splitChunks: {
				chunks: 'async',
				cacheGroups: {
					vendor: {
						test: /[\\/]module[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
		entry: {
			// gsap: './#src/js/libraries/gsap.js',
			// chroma: './#src/js/libraries/chroma.js',
			// SplitText: './#src/js/libraries/SplitText.js',
			// ScrollSmoother: './#src/js/libraries/ScrollSmoother.js',
			// ScrollTrigger: './#src/js/libraries/ScrollTrigger.js',
			// ScrollToPlugin: './#src/js/libraries/ScrollToPlugin.js',
			// assets: './#src/js/assets.js',
			app: './#src/js/app.js',
			main: './#src/js/main.js'
		},
		output: {
			filename: '[name].min.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
					],
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						"style-loader",
						"css-loader",
						'sass-loader'   // компилирует Sass в CSS
					]
				},
			],
		},

	},

	svgSpr: {
		shape: {
			id: {
				separator: '--',
				pseudo: '~',
				whitespace: '_'
			},
			dimension: { // Set maximum dimensions
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: { // Add padding
				padding: 0
			},
			transform: [{
				svgo: {
					plugins: [
						"cleanupAttrs",
						"convertColors",
						"removeEmptyAttrs"
					]
				}
			}],
		},
		mode: {
			defs: {
				dest: './',
				sprite: './sprite.svg',
			},
		},
	},
	pug: {
		pretty: true,
		plugins: [pugbem]
	},
	htmlMin: {
		collapseWhitespace: true
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg'],
	},
	renameJs: {
		extname: '.js',
		suffix: '.min',
	},
	minJs: {
		ext: {
			src: '.js',
			min: '.min.js'
		}
	},
	svgMin: {
		js2svg: {
			indent: 4,
			pretty: true
		}
	},
	cheerio: {
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: { xmlMode: true }
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			"Android >= 4",
			"last 3 versions",
			"Firefox >= 24",
			"Safari >= 6",
			"Opera >= 12"
		]
	},
	imagemin: ([
		imagemin.svgo({
			plugins: [
				{ optimizationLevel: 5 },
				{ progessive: true },
				{ interlaced: true },
				{ removeViewBox: false },
				{ removeUselessStrokeAndFill: false },
				{ cleanupIDs: false }
			],
		}),
		imagemin.gifsicle(
			{ interlaced: true }
		),
		imagemin.optipng({
			optimizationLevel: 5
		}),
		imagemin.mozjpeg({
			quality: 75,
			progressive: true
		}),
	]),
}; 