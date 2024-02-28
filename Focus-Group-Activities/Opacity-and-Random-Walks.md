---
sort: 1
---

# Opacity and Random Walks

**Definition: **

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

#### Moving our Photon

Now that \\(a\\) is randomized, we can update our photon's position. At the end of the last expression, add a comma after \\(\mathrm{random()}\\). We are going to add two more actions here to add \\(cos \theta\\) to \\(X\\) and \\(sin \theta\\) to \\(Y\\). After the comma, type

$$X\to X+\cos d_{a},Y\to Y+\sin d_{a}$$

Nice job! Now when you click the arrow to the left of the action, you should see the photon jump in a random direction. Now that we have our action, lets automate!

### Automating our Model

Before we fully automate, we should add a couple simple variables. Add a variable called \\(N\\) to measure the number of steps our photon takes. Set it equal to \\(0\\). Then add a vairable called \\(D\\) which measures the distance that our photon is from the center of the star. Set \\(D\\) equal to the square root of \\(X^2 + Y^2\\)











<iframe src="https://www.desmos.com/calculator/ectyu6rioo" width="100%vw" height="800" style="border: 1px solid #ccc" frameborder=0></iframe>



General Questions

- How does density change over the main sequence? (with respect to mass)
- How does path length change with mass?
- How does energy production change with mass?
- How does the time it takes for a photon to leave the sun change with mass?






## Questions

- 
-

## Takeaway


## Activity