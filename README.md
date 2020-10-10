# metaexplorer-starter
Get your own code ⚭ nocode editor running in less than 10 minutes
- [Here's a video tutorial, with some explanations](https://youtu.be/xdP286cBJpg)

# Not a developer?
### What you need to download and install
- [nodejs](https://nodejs.org/)
- [yarn](https://yarnpkg.com/getting-started/install)
- [lerna](https://lerna.js.org/#getting-started)

### Getting started with no-code
- open a terminal in the folder where this readme is ([windows](https://superuser.com/a/340051), [mac](https://lifehacker.com/launch-an-os-x-terminal-window-from-a-specific-folder-1466745514))
- run `yarn install` on first run
- run `yarn editor` to start the demo-app in the editor
- done, congratulations!

# Getting started with low-code
This project uses yarn namespaces, make sure to have yarn installed
- run `yarn install` on first run
- run `yarn editor` to start the metaexplorer-editor on localhost, which will run a server and a client. The editor-server package is located in `services/@my-mp/editor-server` and the client package in `apps/@my-mxp/editor-client` if you want to customize it
- a browser window with the starter demo app will open. You can freely change it when you hit the yellow "edit" button
- the editor will create a working directory in `services/@my-mp/editor-server`. Each time you start the editor, the demo app will be copied from `nocode/@my-mxp/jsonstore` to the working directory. This means you can experiment without breaking existing work
- once you're happy with your new app, copy the `dev-srv-nocode/blocks`-folder over to `nocode/@my-mxp/jsonstore`
- restarting the editor will now always copy your new app
- you can now run a polished version of your app, which doesn't include the editor. run `yarn start` will start the app located in `apps/@my-mxp/cra-app`

# Getting started with code
- for your visual component development there are two packages containing storybook
- one of them is `packages/@my-mxp/ui-lib`, for visual components that don't need metaexplorer
- the other ist `mods/@my-mxp/ui-mod`, for wrapping components with an interface that's usable in the editor
- the mod is also where you'd propagate metaexplorer-state to your own components, or dispatch actions to change global state

# Customizing to your namespace
just search and replace 'my-mxp' with your own organizationname (for folder and file names, and in files)
