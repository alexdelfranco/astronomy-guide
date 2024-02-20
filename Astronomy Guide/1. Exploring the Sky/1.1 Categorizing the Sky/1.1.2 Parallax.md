---
sort: 2
---

# Parallax

#### Definition: Parallax is a method used to determine the distance to an object. By recording the angle that the object moves across the sky, you are able to determine how far away from Earth the object is.

## Background

Centuries ago, many astronomers predicted that as Earth moves around the Sun, stars in the sky should appear to move back and forth. They predicted that if the stars were really far away, the movement would be extremely small. As telescope technology improved, astronomers began to notice very slow and tiny wobbles in stars. The movement was so small that it was impossible to see without a telescope. It would take stars a full year to move back and forth in one complete cycle. It turns out the original astronomers were right!

The effect that was predicted and then observed is called parallax, and it can be used to determine how far away stars are in the sky. If you have two objects, some closer to you and some pretty far away, you can measure how much the near objects move compared to how much the far objects move when you travel side to side. You might have experienced this while looking out the window of a moving car: the nearby trees and buildings seem to fly by, while the more distant hills appear to move slowly and far away mountains and landmarks seem stationary.

An image describing parallax is included below. When you are at *"Viewpoint A"* you can see that the object appears to be directly in front of the blue square. When you move to *"Viewpoint B"*, it appears that the object has moved to be in front of the red square.

<img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Parallax_Example.png" alt="Parallax Image, credit Wikimedia Commons" width="400"/>

This effect should be familiar to you. For a simple demonstration, make a thumbs up and hold your arm straight out in front of you. Now close one eye. With your other eye, focus on your thumb and where it falls on the background (hopefully a relatively far away backdrop). Then switch eyes and pay attention to how your thumb appears to move. That is the simple idea of parallax.

Now of course stars are a lot further away than your thumb. But we can make up for that by taking pictures of the sky from much further away points. Image each eye is a camera — the distance between your cameras is only a couple inches. Now imagine taking a picture of space in January and then taking another picture six months later in July. The larger the distance between your cameras, the further away you can detect something moving. By cleverly using the orbit of the Earth around the Sun as shown in the image below, we are able to accurately measure the wobbles of stars extremely far away.

<iframe src="https://www.desmos.com/calculator/301oa5qauu?embed" width="750" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

### Calculating Distance

As we have mentioned, we can use this parallax effect to measure distances using a very simple formula. Since we measure the distance between objects in the sky with angles, we need a unit of angle measurement small enough to describe the tiny movement back and forth of stars. To find our unit of choice, we can divide the entire night sky around the Earth into 360 degrees. (The moon generally takes up about 1/2 of a degree on the sky. That means you would have to put 720 moons next to each other to make a full ring of moons around the Earth!)

We can then divide each degree into 60 parts, each of which is called an arcminute. But that isn't small enough. If we keep going, we can divide each arcminute into 60 parts, each of which is called...you guessed it: an arcsecond. Its these units, arcseconds, that astronomers use to measure the distances between tiny stars on the sky. The added bonus is that there is a really simple formula that relates the angle a star moves on the sky in 6 months, to its distance from Earth.

Using the interactive diagram above, you can see that the further away the star is, the smaller the angle \\(p\\). It turns out that this inverse relationship is incredibly simple if we use the right units for distance. We can write the equation

$$d=\dfrac{1}{p''}~\mathrm{pc}$$

where the angle \\(p''\\) is in arcseconds (the two apostrophes signal arcseconds) and distance \\(d\\) is measured in a new unit of distance, the **parsec** (a shortened form of *parallax-second*), which is abbreviated **pc**. One parsec is over 30 million million kilometers (\\(1~\mathrm{pc} \approx 3*10^{13}~\mathrm{km}\\))! This means that an object with a parallax angle of \\(1\\) arcsecond is exactly \\(1\\) parsec (or \\(30,000,000,000,000~\mathrm{km}\\)) away!

## Questions

- How can you measure the distance to something that is beyond your reach and the reach of your tools?
- How far away are stars and how do we measure distances to them?

## Takeaway

We can measure the distance to stars using their motion in the sky. Every year, stars appear to wobble back and forth because our viewpoint is changing — we are orbiting the Sun.

Since a smaller wobble means the stars are further away, we can 

## Activity

In this activity, we are going to explore parallax by building a model of the Earth and Sun in Desmos. Desmos is a widely popular online graphing calculator that can plot equations, shapes, and even some animations. We will be using Desmos a lot in this course to build everything from simple equation plots to complex simulations of stars.

### Learning Desmos

For this activity, we will use a premade graph and make changes to it as we progress. If you are new to Desmos, it might be useful to navigate to their tutorial. For most of what we are doing, you can reference the image below from Desmos' website:

<img src="https://help.desmos.com/hc/article_attachments/4407513097613" alt="Desmos Tutorial, credit Desmos.com" width="600"/>

In this activity, you will interact with a Desmos graph below while following the prompts listed after. You are welcome to open the graph in another tab and switch back and forth between both pages as necessary. Most importantly, have fun!

### <a href="https://www.desmos.com/calculator/2cjxymdv9u" target="_blank">If you would like to open Desmos in a new tab, click here!</a>

<iframe src="https://www.desmos.com/calculator/bfxlet8ybn" width="100%vw" height="800" style="border: 1px solid #ccc" frameborder=0></iframe>

### Plotting the Solar System

Right above this you should see a blank Desmos graph, with a few dropdown menus on the left panel where equations normally are. You are welcome to look at the equations, but be careful not to make any changes. Any small differences might break the math behind the animations!

We want to begin by enabling the Solar System. You can do this by clicking the empty circle to the left of the words Solar System. Once you click, the empty circle should be replaced by a folder icon and a small solar system should appear in the center of the notebook. Zoom until you can comfortably see the orbit of Earth traced out by a dotted line.

Now click the play button next to \\(t_{months}\\). This is a time variable that measures how many months into the year we currently are.
- As \\(t_{months}\\) increases, what happens to the Earth?
- What is the range of \\(t_{months}\\)? (What are the minimum and maximum values?)
- How many months does it take for the Earth to move from one side of its orbit to the other? Does this make sense? Why?

You can also change the time by dragging the slider under \\(t_{months}\\). See how the orbit changes if you slowly drag 

### Adding Stars

Once you have answered the questions above, pause \\(t_{months}\\) and click the empty circle next to the *Stars* folder. Some purple stars have appeared on the plot. Can you find them? They should be to the right of the solar system (around x=15). Zoom out so that both the solar system and the stars are visible at the same time. Now hit the play button next to \\(t_{months}\\).

Based on what you read earlier in this section, how would the stars move in the sky from the perspective of Earth? What sort of pattern would they appear to make in the sky? How could we calculate that on this graph?

### Lines of Sight

Pause \\(t_{months}\\). Now enable the *Lines of Sight* folder. What gets added to the graph?

The green lines are our viewing range from Earth. Imagine you point a camera at the sky, the green lines map out how much of the sky that your phone can see. (The vertical green and the stars should be much much further away from the Earth and the Sun than they are in this activity. The entire graph is smaller so that we can fit everything on a single screen.)

- What do the red dotted lines represent?
- Predict what will happen when we press play on \\(t_{months}\\).

Once you have made your predictions, unpause time. Does the graph behave like you expected? Pay attention to where the red dotted lines intersect the green vertical line. Why is that region of the diagram so important?

Imagine we could stand on our model Earth and look into the sky between the angled green lines. What would we see? How would the stars move?

### Viewing Panel

It turns out we can see exactly that using our patented EarthView technology! Pause time and enable the viewing panel. A green panel should appear above the diagram. What is it showing? What do you expect to happen when you unfreeze time?

If you guessed that the panel is showing our view from Earth, you'd be right! The left side of the panel corresponds to the top green line and the right side of the panel is the bottom green line. Try slowly changing what month it is by dragging the slider for \\(t_{months}\\). Focus on one star and pay attention to how it moves relative to the vertical green line. Can you see how its motion is the same in the EarthView panel?

### Calculating Distance

Now this is the fun part! If you click on any star in the EarthView panel, you can see a number pop up. That number represents the location of the star in the sky, measured in arcseconds. We define \\(0\\) arcseconds to be the left of the EarthView panel and the top green line in the solar system view. Since our field of view (FOV) is \\(20\\) arcseconds, the right side of the EarthView panel and the bottom green line both correspond to \\(20\\\) arcseconds. *(Note: This FOV is much larger than an actual 20 arcsecond FOV. It is greatly exaggerated for this activity.)

- What would be the location of a star (measured in arcseconds) located in the middle of the EarthView panel?
- What about a star three quarters of the way to the right side?

### Putting it all together — The Mission

We can now begin your real mission. You are an agent who has been called upon for your unique set of astrophysical skills. NASA recently sent a top secret space mission to a far away star. Unfortunately, the space shuttle malfunctioned near the end of its mission and stranded a group of astronauts in deep space. The last known correspondence from the shuttle said it had traveled 0.1418 parsecs away from Earth. The top NASA scientists have narrowed its possible location to 4 stars, but they aren't sure what to do next. We have called on you to find the missing astronauts and help bring them home.

You must find which star is located 0.1418 parsecs away from Earth. Change the month slider to whatever times will work best to help you. Use the parallax equation to translate the angular measurements that you've made into distances. Which of the stars are our astronauts stranded on??

The mission is yours. Good luck.