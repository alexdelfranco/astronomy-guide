---
sort: 3
---

# Opacity and Random Walks - Scaffolded

<!-- **Definition: ** -->

## Background

Stars are hot balls of gas and light held together by gravity. At the core, light elements such as hydrogen and helium are fused to create heavier atoms. This fusion releases an enormous amount of energy that is transported away by photons leaving the star.

While this may seem straightforward enough, the mechanisms that tell us how the photons move from the center of the star to the edge can actually get pretty complex. The main issue is that photons can't move in a straight path from the center of a star to its edge — there are many tiny gas particles in their way. Instead, each photon makes quick jumps, bouncing between gas particles like a pinball in an arcade machine, slowly working its way away from the core.

## The Activity

In this activity, we are going to explore a model of a star where we can examine the true path that a photon takes to escape. This model is built in Desmos and we can use it to discover some fundamental properties of photons and stars. You can open the model in a new tab by clicking <a href="https://www.desmos.com/calculator/mucqhejsyb" target="_blank">here</a> or you can use it below.

<iframe src="https://www.desmos.com/calculator/mucqhejsyb" width="100%vw" height="800" style="border: 1px solid #ccc" frameborder=0></iframe>

### Exploring the Model

The model simulates a photon that starts in the core of the star and slowly, randomly, moves towards the star's edge. You can move the photon around by clicking on it and dragging. You can run the model by clicking the metronome icon under the **+** sign at the top of the left hand panel. Once you start running the model, the photon will step a distance of 1 (by default) in a random direction every 10 milliseconds. You can see the number of steps the photon has taken by looking at the value of \\(N\\) in the left hand panel. You can reset the model by clicking the arrow symbol next to the cell in the left hand panel labeled \\(R_{eset}\\).

There are some inputs into the model you can change by opening the **Variables** folder. We will explore what these mean in a bit.

Take a few minutes to play around with the model and get a good feel for what it's showing you. If you break the model in any way, you can just reload the page to fully reset the model.

### Initial Model Questions

Respond to the following questions in 1-2 sentences:

- **What does the number at the center represent?**
- **Why does the photon start its path at the center of the star?**
- **Why are we choosing a random angle here?**
- **Will the length of each step be the same for every star? Why or why not?**

## Conceptual Questions

### Reflecting on the Model

As you run the model, the photon takes a jittery path from the core of the star to its edge. In two sentences, explain why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 10 seconds. Based on what you have seen in the model, how long do you think it would take a photon making a random walk? (Each of you should make your own estimate.)

### A Photon Escaping the Sun

We want to use this model to find how long it takes a photon to escape the Sun. Let's assume the step length in Desmos is equal to 1cm (which is pretty accurate for the Sun). Set the radius of the star to equal the Sun's radius in centimeters (\\(R_{\odot} = 7*10^{10}~cm\\)). Now run the model. What is happening? What might be the issue with answering our question this way?

<!-- Specified 5 runs per l here which should add a bit of data collection time -->
Hmm. Maybe we could find a relationship between the radius of our star and the number of steps the photon takes to escape? Try 5 different values for the average photon path length \\(l\\) (0.5,1,2,3,5) and see how many steps it takes for the photon to escape. Try running the model 5 times with each value and record the average number of steps for each. We can assume that the number of steps is related to the ratio between of step length and the radius of the star. What is the approximate relation between \\(\dfrac{r}{l}\\) and \\(N\\)? *Hint: The relation should take the form of a power rule: \\(N = \dfrac{r}{l}^{x}\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). It's ok if the power rule predicts values for \\(N\\) that are slightly different than the ones you measure. Also note that we made the radius \\(r\\) equal to 100 when building the model.*

<!-- Extra question to add time -->
Look back at the data you collected. Is there significant variation between your measurements of \\(N\\) for a given \\(l\\)? Does the range of measured \\(N\\) values change based on the value of \\(l\\)?  Why might this be?

Now use the relation between \\(D\\) and \\(N\\) to calculate the number of steps a photon needs to take to escape from the Sun. *Note: You can create a folder called **Calculations** to add any equations or expressions to help you answer this question.* (For \\(D\\) use the radius of the Sun measured in centimeters.)

<!-- This question is still a bit tricky -->
Now find how long it takes the photon to escape from the Sun. Is your answer what you expected?

### Improving The Model

The path length of the photon is affected by two factors in a star: the spacing of particles in the star and the likelihood that each particle will interfere with the photon (not all particles reflect light in the same way). The chance that the particle will reflect (or scatter) the photon is called the opacity. A high average opacity in a star means a high chance of light scattering off particles and a low opacity means a low chance of scattering.


<!-- We could ask how the path length changes due to these factors and then have them play around with the sliders. They could zoom in and look at the exact path lengths, changing the speed of the model, try to figure out the relation. Ask them to write an equation -->

When either of these two factors increase (i.e. when the density or the opacity go up), the path length of the photon decreases. Thus we can reason that density and opacity are both inversely related to the path length.




<!-- 
This means we can write an equation for \\(l\\). If we call density \\(d\\) and opacity \\(k\\), we can change our value for \\(l\\) to be:

$$ l = \dfrac{1}{dk} $$

Now add two sliders, one for \\(d\\) and one for \\(k\\). You can put them both in the **Variables** folder. Your model now includes density and opacity! -->

Try running your model and changing the density and opacity sliders while the particle is moving. What do you notice about the movement of the particle? Do you think a higher opacity would lead to a shorter or longer escape time? What about a higher density? Do these conclusions make sense? Discuss in with your activity partner.

### Putting It All Together

Using your relation between path length and escape time that you found earlier, estimate by what factor the escape would change if the density of the star was doubled? What about if the opacity was doubled? What if the radius was doubled?

Can you sketch plots for each of these values? Make three graphs, one with density on the x-axis, one with opacity on the x-axis, and one with radius on the x-axis. Put escape time on the y-axis for all three and then plot a handful of values until you have a general relation. Are the relations intuitive? Try explaining to your acitivty partner why your curves have the shapes they do.







<!-- ## Conceptual Questions

As you run the model, the photon takes a jittery path from the core of the star to its edge. In two sentences, explain why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 10 seconds. Based on what you have seen in the model, how long do you think it would take a photon making a random walk? (Each of you should make your own estimate.)

We want to find how long it takes a photon to escape the Sun. Let's assume the step length in Desmos is equal to 1cm (which is pretty accurate for the Sun). Set the radius of the star to equal the Sun's radius in centimeters (\\(R_{\odot} = 7*10^{10}~cm\\)). Now run the model. What is happening? What might be the issue with answering our question this way?

Hmm. Maybe we could find a relationship between the radius of our star and the number of steps the photon takes to escape? Try a few different radii (10,20,35,50,100) and see how many steps it takes for the photon to escape. What is the approximate relation between \\(D\\) and \\(N\\)? *Hint: The relation should take the form of a power rule: \\(N = D^{x}\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). It's ok if the power rule predicts values for \\(N\\) that are slightly higher than the ones you measure.*

Now use your relation between \\(D\\) and \\(N\\) to calculate the number of steps a photon needs to take to escape from the Sun. (For \\(D\\) use the radius of the Sun measured in centimeters.) Now find how long it takes the photon to escape from the Sun. Is your answer what you expected?

A star with twice the mass of the sun should have a radius two times as big. In general,

$$ M \sim R $$

Use this relation and your answers to the questions above to calculate how long it should take for a photon to escape stars with masses 2,5,10, and 50 times the mass of the Sun. Sketch or plot the escape time of a photon versus the mass of the star it's escaping (on the x-axis plot masses from 1 to 50 times the mass of the Sun and on the y-axis plot time). Does this curve look like what you expected?

 -->
