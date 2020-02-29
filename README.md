# metaexplorer-starter
Starter project for Metaexplorer

# Getting started
This project uses yarn namespaces, make sure to have yarn installed
- run `yarn install` on first run
- run `yarn editor` to start the metaexplorer-editor on localhost, which will run a server and a client. The editor-server package is located in `services/@my-mp/editor-server` and the client package in `apps/@my-mxp/editor-client` if you want to customize it
- a browser window with the starter demo app will open. You can freely change it when you hit the yellow "edit" button
- the editor will create a working directory in `services/@my-mp/editor-server`. Each time you start the editor, the demo app will be copied from `nocode/@my-mxp/jsonstore` to the working directory. This means you can experiment without breaking existing work
- once you're happy with your new app, copy the `dev-srv-nocode/blocks`-folder over to `nocode/@my-mxp/jsonstore`
- restarting the editor will now always copy your new app
- you can now run a polished version of your app, which doesn't include the editor. run `yarn start` will start the app located in `apps/@my-mxp/cra-app`


# customizing to your namespace
just search and replace 'my-mxp' with your own organizationname (for folder and file names, and in files)