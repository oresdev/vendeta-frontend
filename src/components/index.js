// Globally register all base components for convenience, because they will be used very frequently.
// Components are registered using the filename

import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    './modules', // Look for files in the current directory
    false, // include subdirectories?
    // Only include "_base-" prefixed .vue files
    //   /_base-[\w-]+\.vue$/
    //   /[\w-]+\.vue$/
    /\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    const componentName = fileName
        .replace(/-(.)/g, function (match, group) {
            return group.toUpperCase()
        })
        .replace(/(\.\/|\.vue)/g, '')
        .replace(/^\w/, (c) => c.toUpperCase()) // Generate valid filename

    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})
