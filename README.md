## High-level Overview

HeadBanger will utilize cDOM (my custom DOM manipulation library), HTML5 canvas, as well as some snazy CSS to create a customizable drummer webapp.

Users will be able to:
  1. Hammer out a beat with their keyboard
  2. Customize their key mapping via a popup menu
  3. Customize each key's sound via a similar popup menu
  4. See a visual representation of their beat-map on the screen, rendered with canvas
  5. Save their visual beat-map for later reference

## Possible Implementation

All but the visual beat representation can be accomplished without the use of HTML5 canvas.  

The key mapping will be based on a data-key attribute on a particular html element.  When users switch to a new mapping, a data-key attribute will be set with the user's preference.  A listener will be placed on that html element to play the selected sound, as well as briefly animate the key being pressed.  Click listeners will also be placed on the button, displaying an options menu where the user can change key binding and sound.

The beat visualization will be rendered with canvas, generating a 'dot' on the moving screen.  After a brief time without input, a modal will appear asking the user if they would like to save their beat-map, or start a new beat.