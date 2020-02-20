# The 'apps' folder
Here's the place for your apps. Mods inside your apps will define what 'powers' you have available, then with the editor you define how these 'powers' play together and make up your app. 

## To phrase it technically:
- metaexplorer lets users modify application state declaratively, and provides an implementation to execute that - functionally
- the visual editor lets you build json that follows the rules of a Domain Modeling Language (the declarative part), you're free to build your own editor
- to actually execute that, a 'mod' can define functional code, for example a UI component, that interprets a data type from the modeling language. The UI component may asynchronously receive input, and output data back to the state, other components may receive that as input and execute their bit. The DML defines which output goes to which input
- In this way, UI components can be exchanged rapidly. You gain the flexibility to swap out a UI Kit or even a Design System, or load a mod for VR/AR instead of one for the web/mobile