---
sort: 1
---

# Open Ended Python Activity

<!-- **Definition: ** -->

## Background

Stars are hot balls of gas and light held together by gravity. At the core, light elements such as hydrogen and helium are fused to create heavier atoms. This fusion releases an enormous amount of energy that is transported away by photons leaving the star.

While this may seem straightforward enough, the mechanisms that tell us how the photons move from the center of the star to the edge can actually get pretty complex. The main issue is that photons can't move in a straight path from the center of a star to its edge — there are many tiny gas particles in their way. Instead, each photon makes quick jumps, bouncing between gas particles like a pinball in an arcade machine, slowly working its way away from the core.

## The Activity

In this activity, we are going to explore a model of a star where we can examine the true path that a photon takes to escape. We will build this model in Python and use it to discover some fundamental properties of photons and stars. Before we start, take a moment to complete this <a href="https://forms.gle/1eUWGcZpXcRVj8197" target="_blank">Pre-Activity Survey</a> with your group



### Setup

#### Opening a Python Notebook

We can begin by opening a new Python Notebook by clicking the following link: <a href="https://colab.research.google.com/github/alexdelfranco/astronomy-guide/blob/master/Focus-Group-Activities/Random-Walk-Open-Ended-Template.ipynb" target="_blank">Blank Python Notebook</a>. The notebook has no code, but is divided into sections that will be useful for us later. You may notice that the current notebook won't save unless you are logged into a Google account. Have one of your team members log into their Google account and save the activity by clicking **Copy to Drive**. You are now ready to begin building your model!

#### Importing and Setup

To make your model work smoothly, we need to run a bit of setup code. First, we can add our generic import statements. You will only be using three packages to build your model: `matplotlib.pyplot`, `numpy`, and `math`. You can import both of them in the **Imports** section by writing the following (the `as` keyword lets us define a shorthand to access these packages more easily in the future):

`import matplotlib.pyplot as plt`

`import numpy as np`

`import math as m`

To make your model interactive, we want to include an extension to matplotlib. You can do this by adding a cell below your imports and typing `!pip install ipympl`. This installs a matplotlib extension for Python notebooks. Let the cell run fully and then delete it. You only need to run it once!

Now at the top of your import code, add a new line that will activate the extension (known as a widget): `%matplotlib widget`. You're now ready to start designing your model!

### Building a Star

Before we build our star, we need to setup our viewing window — the space where we will look at the model's output. In a cell in the **Viewing** section, create a 10 by 10 plot using the matplotlib subplots setup:

`fig,ax = plt.subplots(1,1,figsize=(10,10))`

If you run this cell, you should see a blank plot created!

We that we have our viewing window, we can begin by making a cross section of our star, which in this case looks like a circle. For now we can say our star has a radius of 100. We can add units and adjust this value later. Directly above your last line of code, set:

`R = 100`

and on the line below your plotting code, set the axis limits to center our viewing panel on your soon-to-be star:

`ax.set_xlim(-R,R)`

`ax.set_ylim(-R,R)`

Now we can plot our star! In matplotlib, you can create a circle using `plt.Circle()`, a function that takes the `xy` position of center of the circle and the radius as arguments. You can also specifiy whether the circle is filled and what color it should be. Once you create the circle, you have to add it to the viewing window using the function `ax.add_patch()`. We can create our star in two lines of code by adding the following right below our `fig,ax` definitions:

`star = plt.Circle((0,0),R,fill=False,color='red')`

`ax.add_patch(star)`

This should plot a circle with a radius of 100 centered on the origin. You can now look at your star!! Feel free to customize your star's color by changing the string `red` to another color.

### Building Your Model

We can now begin building the core of your model. In a cell in the **Model** section, define a function called `model`. This will be the brain of your physics simulation! The function should take an input called `radius`, which of course is the radius of your star. By allowing it to take this input, we can run our finished model for stars of many different sizes! You can add the following code to the model cell:

`def model(radius):`

Nice job! We can now build your model of a photon moving around inside of our star. Inside of your function, we can save the x and y position of the photon in two variables called `X` and `Y`. Since the center of the star is at \\((0,0)\\), we can set them both to \\(0\\) (and update them automatically later as the model runs). Inside your function, write

`X = 0`

`Y = 0`

As the photon moves, we want to keep track of its path. We can create lists in Python to do store our position values. Create two lists, one for all of the X positions and one for all of the Y positions. We will add to these as the photon begins to move.

`X_list = []`

`Y_list = []`

Nice work! We can now start building the heart of your model!

**Question (discuss with your activity partner): Why does the photon start its path at the center of the star?**

### Adding Movement

We can now add motion to our photon. We want it to bounce around the inside of our star nonstop until it eventually reaches the surface. Once it hits the surface, we want our model to stop running. To figure out when this happens, we have to compare the distance our photon is from \\((0,0)\\) to the radius of our star. As long as our photon is closer to \\((0,0)\\) than the radius of our star, we want our model to keep running.

Talk to your partner about how we can measure our photon's distance from \\((0,0)\\) using the variables we have already defined.

We can achieve the behavior we want by using something called a `while` loop. A `while` loop runs the code inside of it as long as a certain condition is met. Here the condition is that our photon is closer to \\((0,0)\\) than the radius of our star. Under your `Y_list` definition, write:

`while m.sqrt(X**2 + Y**2) < radius:`

This will start our while loop and stop our model as soon as our photon leaves our star.

### Choosing a Random Angle

We can now add motion to our photon. Every time the photon bounces off of a particle, it chooses a random direction to move. We can simulate this by choosing a random angle and having it move a distance of \\(1\\) in that direction. 

Once we choose our random angle, we can move a distance of \\(1\\) in that direction by moving \\(cos \theta\\) in the *X* direction and \\(sin \theta\\) in the *Y* direction. An example is shown below. Click on the box with the angle in it to generate a new random angle.

<iframe src="https://www.desmos.com/calculator/iiwba49zwp?embed" width="750" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

Let's begin by making our angle. Create a new expression for our angle inside our `while` loop. Call it `angle`. Every time the loop runs, we want to set our angle to a random number between \\(0\\) and \\(2\pi\\). 

We can do this by using the `np.random.random()` function. `np.random.random()` conveniently returns a random number between \\(0\\) and \\(1\\). If we multiply that number by \\(2\pi\\) we can get our truly random angle. Set `angle` equal to a random angle by writing the following inside our loop:

`angle = 2 * np.pi * np.random.random()`

Nice work! Now that we have our angle, we can instruct our photon to actually move.

**Question (discuss with your activity partner): Why are we choosing a random angle here?**

### Moving our Photon

Now that we have our random angle, we need to do two things to move our photon. First, we have to record where it currently is, and then we have to update it using our angle. We can save our photon's current position by adding the current values of `X` and `Y` to the lists we made before:

`X_list.append(X)`

`Y_list.append(Y)`

Add those lines under our `angle` definition inside the loop. Now we can update our positions. As shown in the interactive graphic above, we want to add the cosine of our angle to `X` and the sine of our angle to `Y`. We can access sine and cosine functions using the `math` package we imported at the start. Change the photons position by adding:

`X = X + m.cos(angle)`

`Y = Y + m.sin(angle)`

below your last statements inside the loop. We now have a working model! 

Finish it by adding a final line after the loop to export (or return) the lists of positons:

`return(X_list,Y_list)`

Make sure it is indented only once (so it isn't "inside" of our loop). We can now start using it to simulate our photon's path through the star.

**Question (discuss with your activity partner): Will the length of each step be the same for every star? Why or why not?**

### Running Our Model

Let's use our model to run a simulation! Run the cell that has your model in it and then move down to our viewing panel. At the top of the cell, we can add a line to run our model. Since we want to save the outputs of our model, we can create two variables, `x` and `y` which will store our generated positions. And since we want `R` to be the input into our model (remember our function takes in the star's radius), we can start writing directly below where we defined `R`:

`x,y = model(R)`

Under where you plotted your star, we can now plot the path of our photon. Add:

`ax.plot(x,y)`

Now you can run the cell! Talk to your partner about what you see! If the matplotlib extensions loaded correctly, you can click the button with the square box on the left of the plot and then select a region inside your star to zoom in. Play around with your model and see if it works like you expect.

---
### Break
---

### Two Final Tweaks

Now that you have played around a bit with your model, it might be nice to change how far the photon moves at each step. We can change how far the photon jumps by adding a multiplier in front of our \\(sin\\) and \\(cos\\) expressions. Create a variable called `step_length` under your definition for `Y_list` (outside of the loop). We will play around with it later, but for now set it equal to `1`.

`step_length = 1`

Now multiply the `m.cos(angle)` and `m.sin(angle)` expressions in the loop by our `step_length` variable so they look something like:

`X = X + step_length * m.cos(angle)`

`Y = Y + step_length * m.sin(angle)`

Nice work! Now for our final addition, it might be nice to know how many steps it took our photon to escape. We can add a counter called `N` to measure the number of steps by defining it to be \\(0\\) when we start our model and increasing it by \\(1\\) every time our model runs. On the line below our definition for `step_length`, add:

`N = 0`

and right before we define our angle (the first line inside our loop), add:

`N = N + 1`

Now we have a counter that increases each time the model moves the photon! Make sure our final step count is returned by changing the final line of our model to read:

`return(X_list,Y_list,N)`

Run the cell that holds our model and head down to the viewing panel section. Change the line where we run our model to also save the total step count:

`x,y,N = model(R)`

And you've done it! We can now print the total step count or we can add it to the top of our figure by adding the line:

`ax.set_title('Step Count:' + str(N))`

at the end of the cell with our plotting code. You just created a fully functional physics simulation. Good job!

## Conceptual Questions (Discussions with your activity partner)

### Reflecting on Your Model

As you run your model, the photon takes a jittery path from the core of the star to its edge. Explain to your activity partner briefly in your own words why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 10 seconds. Based on what you have seen by running your real physical model of a photon traveling through a star, estimate again how long you think it would take a photon making this “random walk” to escape? (Each of you should make your own estimate.)

*It’s worth noting two differences between your model and real life. First, we are assuming the radius of the star in our model is around 100cm. Of course that isn’t a good estimate for the entire star, but it actually is a pretty good model of what is happening in a small sphere inside the star. If we assume the physics are the same for the rest of the star (which they mostly are!) our model does a pretty good job.*

*Second, it is worth noting that our model assumes the same step length each time the photon moves. In reality, this is an average step length. There is a lot of randomness inside of stars — sometimes the photon barely jumps and sometimes it jumps a lot! But our step length (often referred to scientifically as the “mean free path” which just means the average unobstructed path of the photon) is still a really good estimate of the photon’s average step size!*

### A Photon Escaping the Sun

We want to find how long it takes a real photon to escape the Sun. Let's assume your step length in your model is equal to 1 cm (which is pretty accurate for the Sun). Set the radius of your star to equal the Sun's radius in centimeters (\\(R_{\odot} = 7*10^{10}~cm\\)). Now run your model. What do you see happening? Is it possible to use this simulation to answer this question directly? Why or why not??

Hmm. Maybe we could find a relationship between the straight line distance the photon traveled (here the radius of our star) and the number of steps the photon takes to escape? Try a few different values (0.5, 1, 2, 3, and 5) for the average photon path length (the `step_length` variable in your model) and observe how many steps it takes for the photon to escape. Run your model 3-5 times for each value of the path length and record the average number of steps (\\(N\\)) it takes the photon to escape the star for each path length.

The number of steps a photon takes is related to the ratio between step length and the radius of the star. What is the approximate relation between \\(\dfrac{r}{l}\\) and \\(N\\) (where l is the step length in our model)? *Hint: The relation should take the form of a power law: \\(N = \(\dfrac{r}{l}\)^x\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). Try plotting your points and drawing a curve through them. It’s ok if the curve doesn’t hit every point that you measured — it should go through the average of them all. See if you can use the curve to find an integer value for \\(x\\). Also note that we made the radius \\(R\\) equal to 100 when building the model.*

Now use your relation between \\(\dfrac{r}{l}\\) and \\(N\\) to calculate the number of total steps a photon needs to take to escape from the Sun. *Note: You can create new cells to add any equations or expressions to help you answer this question.* (For \\(l\\) use \\(1~cm\\) and for \\(R\\) use the radius of the Sun measured in centimeters from your equation sheet.) 

Given the number of steps you estimated, now find how long it takes the photon to escape from the Sun. Does the answer surprise you? Why or why not?

### Improving Your Model

The path length of a photon is affected by two physical properties of a star: the spacing of particles in the star (density) and the likelihood that each particle will interfere with the photon (not all particles interact with and redirect light in the same way). The chance that a particle will redirect (or scatter) a photon is called the “opacity”. A high average opacity in a star means a high chance of light scattering off particles (which leads to a low step length) and a low opacity means a low chance of scattering (leading to a higher step length).

When either of these two factors increase (i.e. when the density or the opacity go up), the path length of the photon decreases. Thus we can reason that density and opacity are both inversely related to the path length.

This means we can write an equation for our `step_length` (which we also referred to as \\(l\\)). If we call density \\(d\\) and opacity \\(k\\), we can change our value for \\(l\\) and implement the equation:

$$ l = \dfrac{1}{dk} $$

We can start by returning to our model cell and changing `step_length` from `1` to:

`step_length = 1 / (d * k)`

Now we just have to define `d` and `k`. On the two lines below, define both variables, setting them each equal to `1`:

`d = 1`

`k = 1`

Your model now includes density and opacity!

Try running your model a few times with different values of density and opacity. What do you notice about the movement of the particle when you make these changes? Use the plotting add ons to zoom in on the individual steps of the particle. Does a higher opacity lead to a shorter or longer escape time? What about a higher density? Do these conclusions make sense? Discuss with your activity partner.

### Putting It All Together

Using your relation between path length and escape time that you found earlier, estimate by what factor the escape time would change if the density of the star was doubled? What about if the opacity was doubled? What if the radius was doubled?

Try sketching the relationships between the key physical properties here. Make three graphs, one with density on the x-axis, one with opacity on the x-axis, and one with radius on the x-axis. Put escape time on the y-axis for all three and then plot a handful of values until you have a general relation. Are the relations intuitive? Explain to your activity partner why your curves have the shapes they do.

## Finishing

Nice work!! You just made a complete model of the interior of a star. That's no small accomplishment. As a group, reflect on what you learned by filling out this <a href="https://forms.gle/bWhYqAeFMbKfsL286" target="_blank">Post-Activity Survey</a>. Then head over to the main table for a final discussion.

