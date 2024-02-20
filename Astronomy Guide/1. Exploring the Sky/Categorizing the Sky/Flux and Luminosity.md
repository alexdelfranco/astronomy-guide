---
sort: 4
---

# Flux and Luminosity

#### Definition: Flux and luminosity both measure of brightness of stars. Luminosity is the total energy a star emits each second. Flux is the luminosity of a star divided by area – it measures how bright a star appears when it is some distance \\(r\\) away.

## Background

### Luminosity

Stars are incredibly bright, hot objects which emit a lot of light. If we want to measure how much light they emit, we can think about energy. The total energy that a star emits each second is called its luminosity and is measured in a unit called \\(\mathrm{watts}\\). You might have seen \\(\mathrm{watts}\\) before when changing a light bulb. \\(\mathrm{watts}\\) are equivalent to energy per second where

$$1~\mathrm{watt} = \dfrac{1~\mathrm{joule}}{1~\mathrm{second}}$$

The total luminosity of the Sun is \\(3.83*10^{26}~\mathrm{watts}\\). We can define this number to be the solar luminosity denoted as \\(L_{cdot}\\). In astronomy, it is often useful to measure the luminosity of stars in multiples of the solar luminosty. (For example, the nearest star to the Sun has a luminosity of Vega, one of the brightest stars in the night sky, is approximately 40 times the luminosity of the Sun or about \\(40~L_{\cdot})\\).)

Now that we have seen the inverse square law, we can apply the it to find the flux of a star. As you move a distance \\(r\\) away from a star, the apparent brightness, what we call the flux, decreases according to the inverse square law. To be more exact, we can imaging a large spherical shell of radius \\(r\\) surrounding the star. The luminosity is spread out over that spherical shell, so to find the flux we can divide the Luminosity by the surface area of that sphere:

$$\mathrm{Flux} = \dfrac{\mathrm{Luminosity}}{4\pi r^2}$$

where \\(r\\) is the distance between the observer and the star. As you move further from the star, the light get spread out and the flux decreases. This is exactly what we should expect — as we move away from a star it gets dimmer!

## Questions

- How do we quantify the total brightness of a star?
- How do we quantify the apparent brightness of a star when we see one from Earth?
- How are the two quantities related?

## Takeaway

Flux and luminosity are measures of brightness. Luminosity measures total energy output per second. Flux measures the amount of energy per second that you see a certain distance from the star.

## Activity 1

In this activity we are going to learn how to do some simple math in Python and then calculate the flux of the Sun! You will get introduced to a very useful Python package called `astropy` which can be used to find useful constants and make unit conversions easy. You will use the equation for flux above and practice the ideas you have learned in this section in preparation for Activity 2.

### <a href="https://colab.research.google.com/github/alexdelfranco/astronomy-guide/blob/master/Astronomy%20Guide/1.%20Exploring%20the%20Sky/1.1%20Categorizing%20the%20Sky/flux1.ipynb" target="_blank">Click here to access the first Python activity for this section!</a>

## Activity 2

In this activity you will calculate the fluxes and the luminosities of all the stars in our original Hubble image! Since we know the distance to the cluster of stars in the image (known as Westerlund 2 or NGC 3247), we can use the measured brightnesses to find the stars' fluxes and then their luminosities. With a bit of Python magic we can add those values to the hover box so that you can easily see information about every star on the plot.

