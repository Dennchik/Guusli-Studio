// //* Configuration
import path from "../config/path.js";
// //* Plugins


//* Processing - Html
export default () => {
	return $.gulp.src(path.html.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "Html",
				message: error.message
			}))
		}))
		.pipe(gul.fileInclude())
		.pipe($.gul.webpHtml())
		.pipe($.gul.size({ title: "До сжатия-Html:" }))
		.pipe($.gul.htmlmin(app.htmlMin))
		.pipe($.gul.htmlmin())
		.pipe($.gul.size({ title: "После сжатия-Html:" }))
		.pipe($.gulp.dest(path.html.dest));
}

