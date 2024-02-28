---
sort: 1
---

# Opacity and Random Walks

<!-- **Definition: ** -->

## Background

Stars are hot balls of gas and light held together by gravity. At the core, light elements such as hydrogen and helium are fused to create heavier atoms. This fusion releases an enormous amount of energy that is transported away by photons leaving the star.

While this may seem straightforward enough, the mechanisms that tell us how the photons move from the center of the star to the edge can actually get pretty complex. The main issue is that photons can't move in a straight path from the center of a star to its edge — there are many tiny gas particles in their way. Instead, each photon makes quick jumps, bouncing between gas particles like a pinball in an arcade machine, slowly working its way away from the core.

## The Activity

In this activity, we are going to explore a model of a star where we can examine the true path that a photon takes to escape. We will build this model in Desmos and use it to discover some fundamental properties of photons and stars.

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

Desmos recognizes two numbers separated by a comma between parentheses as a point. We can plot our photon by typing:

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

To set \\(a\\) to our random angle, we need to use an **Action**. Action in Desmos use right-facing arrows (\\(\to\\)) and are typed by pressing a minus sign followed by a greater-than sign (->) with no space inbetween. Here we want our action to set \\(a\\) to \\(\2\pi * mathrm{random()}\\) and we can do this by typing:

$$ a \to 2\pi * \mathrm{random()} $$

The symbol to the left of the expression should change to resemble an arrow. If you click this arrow, you should see tha value of \\(a\\) change to a random number between \\(0\\) and \\(2\pi\\). Let's call this action **A**. Add \\(A=\\) before the expression and try running it again. *This last step is very important. It lets us randomize \\(a\\) automatically later.*

**Question (1 sentence answer): Why are we choosing a random angle here?**

#### Moving our Photon

Now that \\(a\\) is randomized, we can update our photon's position. At the end of the last expression, add a comma after \\(\mathrm{random()}\\). We are going to add two more actions here to add \\(cos \theta\\) to \\(X\\) and \\(sin \theta\\) to \\(Y\\). After the comma, type

$$X\to X+\cos d_{a},Y\to Y+\sin d_{a}$$

Nice job! Now when you click the arrow to the left of the action, you should see the photon jump in a random direction. *Move \\(a\\) and \\(A\\) into a new folder called **Actions**.*

**Question (1 sentence answer): Will the length of each step be the same for every star? Why or why not?**

Now that we have our action, lets automate!

### Automating our Model

#### Step Count and Distnace

Before we fully automate, we should add a couple simple variables. Add a variable called \\(N\\) to measure the number of steps our photon takes. Set it equal to \\(0\\) for now. Then add a vairable called \\(D\\) which measures the distance that our photon is from the center of the star. Set \\(D\\) equal to the square root of \\(X^2 + Y^2\\).

To make \\(N\\) update automatically, add a comma at the end of your expression for the action \\(A\\). After the comma, add

$$ N \to N + 1 $$

Now when you click the arrow to the left of \\(A\\), the value of \\(N\\) should increase.

#### Adding a Ticker

Now we can automate! Click the **+** button at the top of the left panel and add a **ticker**. You should see the ticker appear as a bar above the panel. This ticker will run an action every certain number of milliseconds (10 milliseconds by default). We want it to move the photon randomly until it reaches the edge of our star. We can do this by adding a conditional statement. Following the word *Run* in the ticker bar, type:

$${D<100:A}$$

This means that as long as \\(D\\) is less than \\(100\\) (the radius we specified for our star) it will keep running our action A. Drag the photon to the center of the star and click the ticker button (which looks like a metronome) to see our model run!

### Tweaks to Make the Model Better

We are almost done with the model! We can add two more things to make it a little easier to use. First, lets add a **Reset** button. Add a new expression called *R* or *R_eset*. We want to set it equal to three actions, all of which help reset the model.

$$ R_{eset} = N \to 0, X \to 0, Y \to 0 $$

Now whenever you click the arrow next to \\(R_{eset}\\) the photon moves back to the center of our star and the counter is reset. 

Finally, click the wrench icon in the top right of the screen. Under the *Grid* section, change the graph to polar (circular) coordinates. Then uncheck the boxes next to *X-axis* and *Y-axis*. This should make your model a lot more readable.

Congrats!! Now we can use our model to answer build some intuition for how particles move through a star. Take a couple minutes to play around with your graph. And make sure to click the blue save button!

## Conceptual Questions

As you run your model, the photon takes a jittery path from the core of the star to its edge. In two sentences, explain why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 10 seconds. Based on what you have seen in your model, how long do you think it would take a photon making a random walk? (Each of you should make your own estimate.)

We want to find how long it takes a photon to escape the Sun. Let's assume your step length in Desmos is equal to 1cm (which is pretty accurate for the Sun). Set the radius of your star to equal the Sun's radius in centimeters (\\(R_{\odot} = 7*10^{10}~cm\\)). Now run your model. What is happening? What might be the issue with answering our question this way?

Hmm. Maybe we could find a relationship between the radius of our star and the number of steps the photon takes to escape? Try a few different radii (10,20,35,50,100) and see how many steps it takes for the photon to escape. What is the approximate relation between \\(D\\) and \\(N\\)? *Hint: The relation should take the form of a power rule: \\(N = D^{x}\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). It's ok if the power rule predicts values for \\(N\\) that are slightly higher than the ones you measure.*

Now use your relation between \\(D\\) and \\(N\\) to calculate the number of steps a photon needs to take to escape from the Sun. (For \\(D\\) use the radius of the Sun measured in centimeters.) Now find how long it takes the photon to escape from the Sun. Is your answer what you expected?

A star with twice the mass of the sun should have a radius ?? times as big. In general,

$$ M \sim R?? $$

Use this relation and your answers to the questions above to calculate how long it should take for a photon to escape stars with masses 2,5,10, and 50 times the mass of the Sun. Sketch or plot the escape time of a photon versus the mass of the star it's escaping (on the x-axis plot masses from 1 to 50 times the mass of the Sun and on the y-axis plot time). Does this curve look like what you expected?





<!-- <iframe src="https://www.desmos.com/calculator/ectyu6rioo" width="100%vw" height="800" style="border: 1px solid #ccc" frameborder=0></iframe> -->


<!-- 
General Questions

- How does density change over the main sequence? (with respect to mass)
- How does path length change with mass?
- How does energy production change with mass?
- How does the time it takes for a photon to leave the sun change with mass? -->