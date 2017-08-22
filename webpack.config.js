module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    
    },
    resolve : {
        extensions: [".ts", ",js", ".json"]
    },
    module: {
        rules : [
            { test: /\.ts?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};