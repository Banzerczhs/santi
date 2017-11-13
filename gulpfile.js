
let gulp = require('gulp')
let connect = require('gulp-connect')
let imgmin = require('gulp-imagemin')
let cssmin = require('gulp-clean-css')
let jsmin = require('gulp-uglify')
let autofixer = require('gulp-autoprefixer')


gulp.task('connect', () => {
	connect.server({
		root: 'dist/',
		livereload: true
	})
})
// 开启服务器
gulp.task('reloadhtml', () => {
	gulp.src('./dist/index.html')
			.pipe(connect.reload())
})
// 重载页面



gulp.task('indexhtml', () => {
	gulp.src('./src/index.html')
			.pipe(gulp.dest('dist/'))
})
// 复制 src/index -> dist/html


gulp.task('wacthhtml', () => {
	gulp.watch('./src/index.html', ['indexhtml','reloadhtml'])
})
// 监听 index  刷新html

gulp.task('mincss',function(){
    //	定义css事件
    gulp.src("src/css/*.*")
    //	找到要执行的文件
    .pipe(cssmin())
    //	压缩css
    .pipe(gulp.dest("dist/css/"))
    //	执行    另存为到dist中	
})
gulp.task('watchcss',function(){
    gulp.watch('src/css/**/*.*',['mincss','reloadhtml'])
    //	监听css文件
})


gulp.task('img', () => {
	gulp.src('src/img/**/*.*')
			.pipe(imgmin({
				progressive: true
			}))
			.pipe(gulp.dest('dist/img'))
})
// 压缩图片
gulp.task('watchimg', () => {
	gulp.watch('src/img/**/*.*',['img','reloadhtml'])
})
// 监听 图片文件夹




gulp.task('js', () => {
	gulp.src('src/js/**/*.js')
			.pipe(jsmin())
			.pipe(gulp.dest('dist/js'))
})
// 压缩js
gulp.task('watchjs', () => {
	gulp.watch('src/js/**/*.js', ['js','reloadhtml'])
})
// 监听 Js

gulp.task('default', [
	// reload
	'indexhtml', 'img', 'js',  'connect', 'mincss',
	// Watch
	'wacthhtml',  'watchjs' , 'watchcss'
	]
)
