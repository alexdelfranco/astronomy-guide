---
sort: 4
---

# Open Ended Desmos Activity

<!-- **Definition: ** -->

## Background

Stars are hot balls of gas and light held together by gravity. At the core, light elements such as hydrogen and helium are fused to create heavier atoms. This fusion releases an enormous amount of energy that is transported away by photons leaving the star.

While this may seem straightforward enough, the mechanisms that tell us how the photons move from the center of the star to the edge can actually get pretty complex. The main issue is that photons can't move in a straight path from the center of a star to its edge — there are many tiny gas particles in their way. Instead, each photon makes quick jumps, bouncing between gas particles like a pinball in an arcade machine, slowly working its way away from the core.

## The Activity

In this activity, we are going to explore a model of a star where we can examine the true path that a photon takes to escape. We will build this model in Desmos and use it to discover some fundamental properties of photons and stars. Before we start, take a moment to complete this <a href="https://forms.gle/1eUWGcZpXcRVj8197" target="_blank">Pre-Activity Survey</a> with your group

### Setup

#### Making an Account

We can begin by traveling to <a href="https://desmos.com" target="_blank">www.desmos.com</a> and making an account. This allows you to save your model. Desmos doesn't autosave, so make sure to click the save button every few minutes otherwise you might lose your progress! Once you have made your account, open a new graph by clicking on their *Graphing Calculator* button.

#### Enabling Actions

Once you have opened your new graph, you need to enable **Actions**, which are an advanced Desmos feature that allow us to make powerful models. You can enable Actions by clicking the dropdown menu next to your account name in the upper right corner of the screen. Then click *Account Settings*, then the *Advanced* tab, then check the box next to *Actions*. You're all set!

### Building a Star

We can begin by making a cross section of our star, which in this case looks like a circle. For now we can say our star has a radius of 100. We can add units and adjust this value later. In the panel on the left, type:

$$ r = 100 $$

This should plot a circle with a radius of 100 centered on the origin. Zoom out to view your star.

#### Adding a Photon

We can now add a photon to our model. On two new lines on the left menu, create two variables, **X** and **Y**, each set to the value of \\(0\\).

$$ X = 0 $$

$$ Y = 0 $$

Desmos recognizes two numbers separated by a comma between parentheses as a point. We can plot our photon by typing in a new line:

$$ (X,Y) $$

Nice job! Try dragging your photon around. You should see that the values for X and Y change as you drag!

**Question (1 sentence answer): Why does the photon start its path at the center of the star?**

#### Organizing

You now have four expressions in your panel on the left. We can group these by placing them in a folder. Click the **+** button in the upper left corner of the panel and add a new folder named **Plotting**. Drag the four equations into that folder (you can do this by moving them right under the folder and dragging slowly up and to the right).

### Adding Movement

We can now add motion to our photon. Every time the photon bounces off of a particle, it chooses a random direction to move. We can simulate this by choosing a random angle and having it move a distance of \\(1\\) in that direction. 

Once we choose our random angle, we can move a distance of \\(1\\) in that direction by moving \\(cos \theta\\) in the *X* direction and \\(sin \theta\\) in the *Y* direction. An example is shown below. Click on the box with the angle in it to generate a new random angle.

<iframe src="https://www.desmos.com/calculator/iiwba49zwp?embed" width="750" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

#### Choosing a Random Angle

Let's begin by making our angle. Create a new expression for our angle. Call it \\(a\\) and set it equal to \\(0\\):

$$ a = 0 $$

We can set this to a random angle using the \\(\mathrm{random()}\\) function in Desmos. \\(\mathrm{random()}\\) conveniently returns a random number between \\(0\\) and \\(1\\). If we multiply \\(\mathrm{random()}\\) by \\(2\pi\\) we can get a truly random angle.

To set \\(a\\) to our random angle, we need to use an **Action**. Action in Desmos use right-facing arrows (\\(\to\\)) and are typed by pressing a minus sign followed by a greater-than sign (->) with no space inbetween. Here we want our action to set \\(a\\) to \\(2\pi * \mathrm{random()}\\) and we can do this by typing:

$$ a \to 2\pi * \mathrm{random()} $$

The symbol to the left of the expression should change to resemble an arrow. If you click this arrow, you should see tha value of \\(a\\) change to a random number between \\(0\\) and \\(2\pi\\). Let's call this action **A**. Add \\(A=\\) before the expression and try running it again. *This last step is very important. It lets us randomize \\(a\\) automatically later.*

**Question (1 sentence answer): Why are we choosing a random angle here?**

#### Moving our Photon

Now that \\(a\\) is randomized, we can update our photon's position. At the end of the last expression, add a comma after \\(\mathrm{random()}\\). We are going to add two more actions here to add \\(cos a\\) to \\(X\\) and \\(sin a\\) to \\(Y\\). After the comma, type

$$X\to X+\cos a,Y\to Y+\sin a$$

Nice job! Now when you click the arrow to the left of the action, you should see the photon jump in a random direction. *Move \\(a\\) and \\(A\\) into a new folder called **Actions**.*

We can change how far the photon jumps by adding a multiplier in front of our \\(sin\\) and \\(cos\\) expressions. Create a variable called \\(l\\) and put it in a new folder called **Variables**. This \\(l\\) will represent our **step length**. Multiply each of the \\(sin\\) and \\(cos\\) expressions by \\(l\\). Now when you click the arrow to the left of the action, you should see the photon jump a distance of \\(l\\) in a random direction! Try a few values of \\(l\\) to get a sense of what exactly our new variable means. We will change the value of \\(l\\) later, but for now we can set it to \\(1\\).

**Question (1 sentence answer): Will the length of each step be the same for every star? Why or why not?**

Now that we have our action, let's automate!

---
### Break
---

### Automating our Model

#### Step Count and Distnace

Before we fully automate, we should add a couple simple variables. Add a variable called \\(N\\) to measure the number of steps our photon takes. Set it equal to \\(0\\) for now. Then add a vairable called \\(D\\) which measures the distance that our photon is from the center of the star. Set \\(D\\) equal to the square root of \\(X^2 + Y^2\\).

To make \\(N\\) update automatically, add a comma at the end of your expression for the action \\(A\\). After the comma, add

$$ N \to N + 1 $$

Now when you click the arrow to the left of \\(A\\), the value of \\(N\\) should increase.

#### Adding a Ticker

Now we can automate! Click the **+** button at the top of the left panel and add a **ticker**. You should see the ticker appear as a bar above the panel. This ticker will run an action every certain number of milliseconds (10 milliseconds by default). We want it to move the photon randomly until it reaches the edge of our star. We can do this by adding a conditional statement. Following the word *Run* in the ticker bar, type:

$$\{D<100:A\}$$

This means that as long as \\(D\\) is less than \\(100\\) (the radius we specified for our star) it will keep running our action A. Drag the photon to the center of the star and click the ticker button (which looks like a metronome) to see our model run!

### Tweaks to Make the Model Better

We are almost done with the model! We can add two more things to make it a little easier to use. First, let's add a **Reset** button. Add a new expression called *R* or *R_eset*. We want to set it equal to three actions, all of which help reset the model.

$$ R_{eset} = N \to 0, X \to 0, Y \to 0 $$

Now whenever you click the arrow next to \\(R_{eset}\\) the photon moves back to the center of our star and the counter is reset. 

Finally, click the wrench icon in the top right of the screen. Under the *Grid* section, change the graph to polar (circular) coordinates. Then uncheck the boxes next to *X-axis* and *Y-axis*. This should make your model a lot more readable.

Congrats!! You just created a fully functional physics simulation. Now we can use our model to build some intuition for how particles move through a star. Take a couple minutes to play around with your graph. And make sure to click the blue save button!

## Conceptual Questions (Discussions with your activity partner)

### Reflecting on Your Model

As you run your model, the photon takes a jittery path from the core of the star to its edge. Explain to your activity partner briefly in your own words why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 5 seconds. Based on what you have seen by running your real physical model of a photon traveling through a star, estimate again how long you think it would take a photon making this “random walk” to escape? (Each of you should make your own estimate.)

*It’s worth noting two differences between your model and real life. First, we are assuming the radius of the star in our model is around 100mm. Of course that isn’t a good estimate for the entire star, but it actually is a pretty good model of what is happening in a small sphere inside the star. If we assume the physics are the same for the rest of the star (which they mostly are!) our model does a pretty good job.*

*Second, it is worth noting that our model assumes the same step length each time the photon moves. In reality, this is an average step length. There is a lot of randomness inside of stars — sometimes the photon barely jumps and sometimes it jumps a lot! But our step length (often referred to scientifically as the “mean free path” which just means the average unobstructed path of the photon) is still a really good estimate of the photon’s average step size!*

### A Photon Escaping the Sun

We want to find how long it takes a real photon to escape the Sun. Let's assume your step length in your model is equal to 1 mm (which is pretty accurate for the Sun). Set the radius of your star to equal the Sun's radius in millimeters (\\(R_{\odot} = 7*10^{11}~mm\\)). Now run your model. What do you see happening? Is it possible to use this simulation to answer this question directly? Why or why not??

Hmm. Maybe we could find a relationship between the straight line distance the photon traveled (here the radius of our star) and the number of steps the photon takes to escape? Try a few different values (0.5, 1, 2, 3, and 5) for the average photon path length (the `l` variable in your model) and observe how many steps it takes for the photon to escape. Run your model 3-5 times for each value of the path length and record the average number of steps (\\(N\\)) it takes the photon to escape the star for each path length.

The number of steps a photon takes is related to the ratio between step length and the radius of the star. What is the approximate relation between \\(\dfrac{r}{l}\\) and \\(N\\) (where l is the step length in our model)? *Hint: The relation should take the form of a power law: \\(N = \(\dfrac{r}{l}\)^x\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). Try plotting your points and drawing a curve through them. It’s ok if the curve doesn’t hit every point that you measured — it should go through the average of them all. See if you can use the curve to find an integer value for \\(x\\). Also note that we made the radius \\(r\\) equal to 100 when building the model.*

Now use your relation between \\(\dfrac{r}{l}\\) and \\(N\\) to calculate the number of total steps a photon needs to take to escape from the Sun. *Note: You can create new cells to add any equations or expressions to help you answer this question.* (For \\(l\\) use \\(1~mm\\) and for \\(r\\) use the radius of the Sun measured in millimeters from your equation sheet.) 

Given the number of steps you estimated, now find how long it takes the photon to escape from the Sun. Does the answer surprise you? Why or why not?

### Improving Your Model

The path length of a photon is affected by two physical properties of a star: the spacing of particles in the star (density) and the likelihood that each particle will interfere with the photon (not all particles interact with and redirect light in the same way). The chance that a particle will redirect (or scatter) a photon is called the “opacity”. A high average opacity in a star means a high chance of light scattering off particles (which leads to a low step length) and a low opacity means a low chance of scattering (leading to a higher step length).

When either of these two factors increase (i.e. when the density or the opacity go up), the path length of the photon decreases. Thus we can reason that density and opacity are both inversely related to the path length.

This means we can write an equation for our \\(l\\) (which just represents our step length). If we call density \\(d\\) and opacity \\(k\\), we can change our value for \\(l\\) and implement the equation:

$$ l = \dfrac{1}{dk} $$

We can start by returning to our definition of \\(l\\) and changing it from a value of 1 to instead match the equation above. Now we can define `d` and `k`. In two new lines below, define both variables, setting them each equal to `1`:

`d = 1`

`k = 1`

Your model now includes density and opacity!

Try running your model a few times with different values of density and opacity. What do you notice about the movement of the particle when you make these changes? Use the plotting add ons to zoom in on the individual steps of the particle. Does a higher opacity lead to a shorter or longer escape time? What about a higher density? Do these conclusions make sense? Discuss with your activity partner.

### Putting It All Together

Using your relation between path length and escape time that you found earlier, estimate by what factor the escape time would change if the density of the star was doubled? What about if the opacity was doubled? What if the radius was doubled?

Try sketching the relationships between the key physical properties here. Make three graphs, one with density on the x-axis, one with opacity on the x-axis, and one with radius on the x-axis. Put escape time on the y-axis for all three and then plot a handful of values until you have a general relation. Are the relations intuitive? Explain to your activity partner why your curves have the shapes they do.

## Finishing

Nice work!! You just made a complete model of the interior of a star. That's no small accomplishment. As a group, reflect on what you learned by filling out this <a href="https://forms.gle/bWhYqAeFMbKfsL286" target="_blank">Post-Activity Survey</a>. Then head over to the main table for a final discussion.