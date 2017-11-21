

let ROOT_PORT = 2929


let gulp = require('gulp')
let imgmin = require('gulp-imagemin')
let cssauto = require('gulp-autoprefixer')
let cssmin = require('gulp-clean-css')
let less = require('gulp-less')
let cached = require('gulp-cached');
let rename = require('gulp-rename');
// css处理
let useref = require('gulp-useref')
// HTML自动注入
let plumber = require('gulp-plumber')
let named = require('vinyl-named')
let gulpwebpack =require('webpack-stream')
let webpackconfig = require('./webpack.config.js')
// js打包
let args = require('yargs')
let gulpif = require('gulp-if')
let gutil = require('gulp-util')
// 命令行处理
let connect = require('gulp-connect')
// 服务器

args.option('watch',{
  boolean:true,
  default:false,
  describe:'watch all files'
})
let cmd = args.argv

gulp.task('server', (cb)=>{
	if(!cmd.watch) return cb();
	connect.server({
		root: './',
		port: ROOT_PORT,
		livereload: true
	})
})

gulp.task('html', () => {
	gulp.src('*.html')
			// .pipe(useref())
      // .pipe(gulpif('*.less', less()))
      // .pipe(gulpif('*.css', cssmin()))
      // .pipe(gulpif('*.css', cssauto()))
			// .pipe(gulp.dest(dist__DIR__))
			.pipe(gulpif(cmd.watch, connect.reload()))
})

gulp.task('css', () => {
	gulp.src('css/app.less')
			.pipe(less())
			.pipe(cssauto({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(rename('content.css'))
      .pipe(gulp.dest('css/'))
      .pipe(gulpif(cmd.watch, connect.reload()))
})

gulp.task('js', () => {
	gulp.src('js/app.js')
			.pipe(plumber())
			.pipe(named())
			.pipe(gulpwebpack(webpackconfig),(err,stats) => {
        if ( err ) throw new gutil.PluginError("webpack",err);
        log(`Fininshed '${colors.cyan('js')}'`,stats.toSting({ chunks: false }))
      })
      .pipe(gulp.dest('js/'))
      .pipe(gulpif(cmd.watch, connect.reload()))
})

gulp.task('img', () => {
	gulp.src('img/**/*.*')
			.pipe(imgmin({
				progressive: true
			}))
			.pipe(gulp.dest('img/'))
			.pipe(gulpif(cmd.watch, connect.reload()))
})
// 压缩图片

gulp.task('font', () => {
	gulp.src('./fonts/**/*.*')
			.pipe(gulpif(cmd.watch, connect.reload()))
})

gulp.task('watch', (cb) => {
	if(!cmd.watch) return cb();
	gulp.watch('**/*.html', ['html']);
	gulp.watch('**/*.js', ['js']);
	gulp.watch('**/*.less', ['css']);
	gulp.watch('**/*.*',['img'])
})

gulp.task('default',[
	'server', 'html', 'css', 'js', 'img', 'font',
	'watch'
])












