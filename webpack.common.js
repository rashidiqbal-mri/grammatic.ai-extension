const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss=require("tailwindcss");
const autoprefixer=require("autoprefixer")

module.exports = {

  entry: {
    popup: path.resolve("./src/popup/popup.tsx"), 
    options:path.resolve("/src/options/options.tsx"),
    background:path.resolve("./src/background/background.ts"),
    contentScript:path.resolve("./src/contentScript/contentScript.ts"),
    dashboard:path.resolve("src/dashboard/index.tsx"),
    newTab:path.resolve("/src/tabs/index.tsx"),
    content:path.resolve("src/contentScript/contentScript.ts")
  },

  module: {
    
    rules: [
      
      {
        use: "ts-loader", // specifies that the ts-loader should be used for TypeScript files
        test: /\.tsx$/, // specifies which files should be handled by the rule (in this case, files with the .tsx extension)
        exclude: /node_modules/, // specifies that files in the node_modules directory should be excluded from the rule
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
          
        ],
        test: /\.css$/i,
      },

    //   {
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-react'],
    //       },
    //   }
    // },
      {
        type: 'assets/resource',
        use: 'asset/resource',
        test: /.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
        },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve("src/static"), to: path.resolve("dist") },
      ],
    }),
    // new HtmlPlugin({
    //   title: "ReactJs Boilerplate",
    //   filename: "popup.html",
    //   chunks: ["popup"],
    // }),

    ...getHtmlPlugins([
      "popup",
      "options",
      "newTab"
    ])
  ],

  resolve: {
    // configures how webpack resolves modules
    extensions: [".tsx", ".ts", ".js"], // specifies the extensions that webpack should look for when resolving modules
  },
  output: {
    // specifies the output configuration for the bundled files
    filename: "[name].js", // specifies the filename of the bundled JavaScript file
  },
  optimization:{
    splitChunks:{
      chunks:"all"
    },
  },
}

  function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
    title: 'React Extension',
    filename: `${chunk}.html`,
    chunks: [chunk]
    }))
};
