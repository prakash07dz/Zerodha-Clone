module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }], // Transform for current Node version
        '@babel/preset-react', // Transform JSX
    ],
};
