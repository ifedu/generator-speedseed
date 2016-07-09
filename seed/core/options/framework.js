module.exports = {
    ngAnnotate($) {
        let ngAnnotate = require('gulp-babel')

        if ($.yo.framework === 'angularjs') {
            ngAnnotate = require('gulp-ng-annotate')
        }

        return ngAnnotate
    }
}