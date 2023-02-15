const allure = require('allure-commandline')

export const onComplete = function() {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'report/allure-results', '--clean', '-o', 'report/allure-report'])
    return new Promise<void>((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function(exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
        })
    })
}