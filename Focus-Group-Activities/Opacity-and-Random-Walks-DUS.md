---
sort: 2
---

# Opacity and Random Walks

<!-- **Definition: ** -->

## Background

Stars are hot balls of gas and light held together by gravity. At the core, light elements such as hydrogen and helium are fused to create heavier atoms. This fusion releases an enormous amount of energy that is transported away by photons leaving the star.

While this may seem straightforward enough, the mechanisms that tell us how the photons move from the center of the star to the edge can actually get pretty complex. The main issue is that photons can't move in a straight path from the center of a star to its edge — there are many tiny gas particles in their way. Instead, each photon makes quick jumps, bouncing between gas particles like a pinball in an arcade machine, slowly working its way away from the core.

## The Activity

In this activity, we are going to explore a model of a star where we can examine the true path that a photon takes to escape. This model is built in Desmos and we can use it to discover some fundamental properties of photons and stars. You can open the model in a new tab by clicking <a href="https://www.desmos.com/calculator/qmhu1elmwf" target="_blank">here</a> or you can use it below.

<iframe src="https://www.desmos.com/calculator/qmhu1elmwf" width="100%vw" height="800" style="border: 1px solid #ccc" frameborder=0></iframe>

### Model Questions

**Question (1 sentence answer): Why does the photon start its path at the center of the star?**
**Question (1 sentence answer): Why are we choosing a random angle here?**
**Question (1 sentence answer): Will the length of each step be the same for every star? Why or why not?**

## Conceptual Questions

As you run the model, the photon takes a jittery path from the core of the star to its edge. In two sentences, explain why the photon takes this path instead of a straight one out of the star.

A photon moving out of the Sun with no resistance should escape the Sun in less than 10 seconds. Based on what you have seen in the model, how long do you think it would take a photon making a random walk? (Each of you should make your own estimate.)

We want to find how long it takes a photon to escape the Sun. Let's assume the step length in Desmos is equal to 1cm (which is pretty accurate for the Sun). Set the radius of the star to equal the Sun's radius in centimeters (\\(R_{\odot} = 7*10^{10}~cm\\)). Now run the model. What is happening? What might be the issue with answering our question this way?

Hmm. Maybe we could find a relationship between the radius of our star and the number of steps the photon takes to escape? Try a few different radii (10,20,35,50,100) and see how many steps it takes for the photon to escape. What is the approximate relation between \\(D\\) and \\(N\\)? *Hint: The relation should take the form of a power rule: \\(N = D^{x}\\) where \\(x\\) is some positive integer. Use the data you collect to find \\(x\\). It's ok if the power rule predicts values for \\(N\\) that are slightly higher than the ones you measure.*

Now use your relation between \\(D\\) and \\(N\\) to calculate the number of steps a photon needs to take to escape from the Sun. (For \\(D\\) use the radius of the Sun measured in centimeters.) Now find how long it takes the photon to escape from the Sun. Is your answer what you expected?

A star with twice the mass of the sun should have a radius two times as big. In general,

$$ M \sim R $$

Use this relation and your answers to the questions above to calculate how long it should take for a photon to escape stars with masses 2,5,10, and 50 times the mass of the Sun. Sketch or plot the escape time of a photon versus the mass of the star it's escaping (on the x-axis plot masses from 1 to 50 times the mass of the Sun and on the y-axis plot time). Does this curve look like what you expected?








<!-- 
General Questions

- How does density change over the main sequence? (with respect to mass)
- How does path length change with mass?
- How does energy production change with mass?
- How does the time it takes for a photon to leave the sun change with mass? -->