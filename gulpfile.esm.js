import { task, series, parallel, src, dest, watch } from 'gulp';
import favicons from 'gulp-favicons';
import minifyCss from 'gulp-minify-css';
import minifyHtml from 'gulp-minify-html';
import uglify from 'gulp-uglify';
import ghPages from 'gulp-gh-pages';
import rename from 'gulp-rename';
import concat from 'gulp-concat'
import copy from 'gulp-copy';

// TODO use a template system like {{handlebars}}
task('build-html', async () =>
  src([
    'html/meta.html',
    'build/pub/favicon.html',
    'html/header.html',
    'html/body.html',
    'html/footer.html',
  ], { allowEmpty: true })
  .pipe(concat('index.html'))
  .pipe(dest('build/pub/'))
  .pipe(minifyHtml())
  .pipe(dest('build/pub/'))
)

task('minify-css', async () =>
  src('css/*.css')
  .pipe(minifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('build/pub/css'))
)

task('minify-js', async () =>
  src(['js/*.js', 'lib/*.js'])
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('build/pub/js'))
)

task('copy-static', async () => src([
  'img/*.png',
  'google*.html'
]).pipe(copy('build/pub/')))

task('build-favicons', () => src('Icon.png')//grr sharp fails to render the svg :-(
  .pipe(favicons({
    appName: 'Impact',
    // appShortName: 'Impact',
    appDescription: 'Impact client - The utility mod for Minecraft',
    developerName: 'Brady',
    developerURL: 'https://github.com/ImpactDevelopment',
    background: '#2196f3',
    theme_color: '#2196f3',
    // path: 'favicons/',
    // url: 'http://haydenbleasel.com/',
    display: 'standalone',
    // orientation: 'portrait',
    scope: '/',
    // start_url: '/?homescreen=1',
    // version: 1.0,
    logging: false,
    html: 'favicon.html',
    pipeHTML: true,//whatdoesthisdo?
    replace: true,
    icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
    //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
    //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
    //
    android: true,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleStartup: true,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    coast: true,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    yandex: true                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
}
  }))
  .pipe(dest('build/pub/')))

// TODO CNAME, google stuff, browserconfig, changelog
task('build', parallel(series('build-favicons', 'build-html'), 'minify-css', 'minify-js', 'copy-static'))

task('watch-all', async () => {
  watch('html/*.html', series('build-html'))
  watch('css/*.css', series('minify-css'))
  watch('js/*.js', series('minify-js'))
})

task('deploy', () => src(['build/pub/**/*', '!build/pub/favicon.html']).pipe(ghPages({
  cacheDir: 'build/gh-pages/',
  push: false,
  branch: 'gh-pages' //FIXME needs to be master
})));

task('default', series('build', 'watch-all'))