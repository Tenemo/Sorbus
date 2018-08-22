# Sorbus
Demo checklist app

## TODO
- redux-persist (doesn't work with immutable.js out of the box!), most of the config is already in, commented out 
- add active links in header to show current view
- styles for mobile browsers? responsive? tablets? touch events?
- check prod bundle size, gzip, DedupePlugin, UglifyJsPlugin, AggressiveMergingPlugin
- cache corruption caused by some bugged module, rimraf-ing .cache on every start is a bad fix, but everything seems to be working
- separate router file

## TODO low priority
- reduce boilerplate, maybe merge Root and App (or index and Root) without breaking hot reload, if possible
- manifest.json
- figure out what's wrong with concurrently@3.6.1 params, parallel linting and testing broken, currently downgraded to @3.5.0
- favicon, at least check if bundling it works, might be broken at the moment

## Notes/tips
- babel-plugin-transform-react-inline-elements causes HMR to fail on connected components, don't use it
- use react-immutable-pure-component if there's a lot of updates and unnecessary rendering
- react-virtualized to display huge tables
- react-helmet - good stuff, improves usability a lot
- react-loadable for bundle splitting if there's many views
- use reselect for memoizing mapStateToProps if there is too many data filtering rules etc.
- user input validation? joi?

## Legacy browser support issues
- https://reactjs.org/blog/2016/01/12/discontinuing-ie8-support.html
- redux 4.0.0 dropped support for IE <11, potential downgrade necessary, in that case replace connected-react-router https://github.com/reduxjs/redux/issues/1342
- <IE11 browsers are unsupported by Microsoft, they don't receive security updates and are a vulnerability https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support
