module.exports = ($) => {
    const app = `./${$.app.folder}`
    const build = `./-${$.build.folder}`
    const dist = `./-${$.dist.folder}`
    const indent = `./${$.indent.folder}`
    const reports = `./-${$.reports.folder}`
    const tmp = `./-${$.tmp.folder}`

    const assets = $.app.inFolder.assets
    const components = $.app.inFolder.components
    const vendor = $.app.inFolder.vendor

    return {
        app: {
            dir: app,

            copy: {
                assets: `${app}/${assets}`,
                vendor: `${app}/-${vendor}`
            }
        },

        build: {
            dir: build,
            port: $.build.port,

            copy: {
                assets: `${build}/${assets}`,
                vendor: `${build}/${vendor}`
            }
        },

        dist: {
            dir: dist,
            index: `${dist}/${$.dist.inFolder.index}`,
            jsAll: `${dist}/${$.dist.inFolder.jsAll}`,
            port: $.dist.port,

            copy: {
                assets: `${dist}/${assets}`,
                vendor: `${dist}/${vendor}`
            },

            vulcanize: {
                dir: `${dist}/${components}`,
                name: $.dist.inFolder.appInFolderComponents.vulcanizeFile
            }
        },

        tmp: {
            dir: tmp
        },

        server: $.server,

        test: $.test,

        reports: {
            dir: reports,
            plato: {
                dir: `./${$.reports.inFolder.plato.folder}`,
                files: [
                    `${build}/**/${components}/**/*.js`,
                    `${build}/**/${$.app.js}/**/*.js`
                ],
                port: $.reports.inFolder.plato.port
            },
        },

        indent: {
            dest: indent,
            spacesBefore: $.indent.spacesBefore,
            spacesAfter: $.indent.spacesAfter,
            src: $.indent.src
        }
    }
}