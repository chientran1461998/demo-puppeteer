exports.config = {
    output: './output',
    multiple: {
        basic: {
            browsers: ['Firefox']
        }
    },
    helpers: {
        Puppeteer: {
            url: '',
            show: true,
            windowSize: '1920x1080',
            chrome: {
                args: ['--start-maximized'],
                defaultViewport: {
                    width: 1920,
                    height: 1080
                }
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        retryFailedStep: {
            enabled: false
        },
        retryTo: {
            enabled: true
        },
        eachElement: {
            enabled: true
        },
        pauseOnFail: {}
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
            pattern: 'wait.*',
            timeout: 0
        },
        {
            pattern: 'amOnPage',
            timeout: 0
        }
    ],
    tests: './*_test.js',
    name: 'UcademyPuppeteer'
}