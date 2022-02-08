This project is the barest of bones. In destop view, you can spawn and move little cylinders
In vr view you can spawn them, and maybe move them? I will address that shortly.
The concept of this project was to have a bin of candles you could spawn and add a little flame to, due to time crunch
that concept was left half developed as rather than being able to do the intended functionality of lighting a flame 
and eventually have the candles despawn after burning.

The main challenge of this project was time, as well as the implementation of XR.
Time is something that by year 3 of IMD I should be able to control, this one slipped through the cracks, that's on me.
As for the implementaion of Xr, to ensure that more than just the vive i was working on was funtctional, I used the laser controls component
this component relies on raycasts to determine what to interact with, and as a base part of a frame, it worked really well, ish.
It caused immense slow down in vr (and nausea), this i found was due to the fact each object in the scene was checking against the raycast.
to improve preformance i limited the laser control to one hand and had it so the laser only checked on some objects.
This led to perhaps the weirdest bug
The various candles can be interacted with in VR, But, when clicked, instead of going to the cursor found in VR, they go to the mouse's cursor. 
This i suspect is some collision between raycasts and mouse clicks found in an open source component I found for dragging and dropping
To credit: the drag and drop was done by github user extraymond, 
https://github.com/extraymond/aframe-mouse-dragndrop

