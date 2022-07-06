/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '**/*.html',
        'assets/styles/**/*.scss',
        'assets/**/*.js',
        'stories/**/*.js'
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"]
    }
}
