module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-new": "off",
        "func-names": "off",
        "global-require": "off",
        "class-methods-use-this": "off",
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
    },
    "env": {
        "node": true,
        "mocha": true
    }
};