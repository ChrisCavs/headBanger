# headBanger

Headbanger is an interactive drumkit written in React.js and HTML5.  See the demo [here](https://chriscavs.github.io/headBanger/).

## Usage

A sample key mapping is provided by default, binding certain keys to certain sounds.  However, you can change the keymapping and the sound for each element on the page.

### Changing Sound

To change a sound:
* click the key you would like to change
* select a sound from the options provided

You can sample the sound after clicking by tapping the key.

### Changing Keybind

To change a keybinding:
* click the key you would like to change
* click 'bind settings'
* press any key, and see it selected
* click 'save binding'

**Note**: multiple sounds can be bound to the same key, allowing for flexible combinations of sounds.

## Under the Hood

### Reusability
headBanger utilizes React.js in order to reuse and repurpose components throughout the app.  There is only one 'key' component, which contains all the necessary functionality to find, play, and bind the proper sound files.

### Animations
HTML5 canvas is used in the background of the application in order to provide a firework effect.  The canvas element sits at the highest level of the app, so as to avoid re-rendering.  When an event fires, a sequence of 'cirlce' instances are generated, each carrying knowledge of their velocity, color, and the context in which they are drawn.

### 'Silence'
During binding, all event listeners turn off for a period of time.  This is accomplished through a 'pause' attribute placed on the window, which is checked for each callback bound to the 'keydown' event.

Originally, this 'silence' was handled in local state and passing to components via props.  However, as props changed, the canvas component would re-render and cause bugs and glitches in the animations.  Therefore, the only way to pass knowledge between components at different levels of the application was to use the window.