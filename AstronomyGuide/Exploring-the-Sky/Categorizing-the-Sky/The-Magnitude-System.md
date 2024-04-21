---
sort: 5
---

# The Magnitude System

**Definition: The magnitude system is a method of recording and comparing the relative brightnesses of stars. There are two types of magnitudes: apparent and abosulte. The apparent magnitude of a star tells us how bright the star will appear to us at night on Earth. The absoulte magnitude of the same star tells us how bright it would really be if we were floating 10 parsecs away from it in space.**

## Background

Hipparchus, the Greek astronomer, was one of the first people to catalog the visible stars in the sky. He compiled a list of the positions over 850 stars and crucially *described the brightness of each one*. He assigned the number 1 to the brightest stars and the number 6 to the dimmest. These brightness numbers were later referred to as magnitudes. This approach has stuck around and is still used today, meaning that **brighter stars have lower magnitudes**.

In the years since Hipparchus, astronomers have standardized the magnitude system. Just like many other systems (e.g. the decibel scale for sound or the Richter scale for measuring earthquakes) the magnitude system is a *logarithmic* scale. This means that a decrease of 1 magnitude corresponds to a star roughly *2.5* times as bright.

This definition is also weird: the exact definition is that an increase in 5 magnitudes corresponds to an increase of 100 times in brightness. This means that an increase in one magnitude means a star is \(100^{1/5} \approx 2.5\) times as bright. If we put these words into equation, we get the expressions listed below. Don't worry if this equation doesn't make sense yet, we will explore these numbers more in this section's activity.

$$\dfrac{F_1}{F_2} = 100^{(m_1-m_2)}$$

where \(F_1\) and \(F_2\) are the fluxes of two stars and \(m_1\) and \(m_2\) are their repsective magnitudes. Using this equation, if we know the fluxes of both stars (which we can measure from any picture of the sky like we did already in the activities) and one of the magnitudes, we can find the magnitude of the final star. Since astronomers agreed that the magnitude of the star Vega is 0, we will always have a star to compare to no matter which new star we choose!

Now that we know about how the apparent magnitudes of two stars relate, if we know the apparent magnitude of one star in the sky, we could find the apparent magnitude of every other star just by comparing their brightnesses!

Finding absolute magnitudes, however, is a bit harder. To do it, we must take three steps. First, we want to write a relation between two apparent magnitudes, using what we know from above. Then we will use our equation from the last section which compares the flux to the luminosity and distance of a star. By combining these two equations, we can calculate the absolute magnitude, \(M\).

Our equation from the previous section was:

$$\mathrm{Flux} = \dfrac{\mathrm{Luminosity}}{4\pi r^2}$$

where \(r\) represents the distance between us and the star. Now imagine we measure the flux of some star, say Altair, from Earth. And then we get in our space ship and travel until we are 10 parsecs away from Altair and we take another flux measurement. Since the luminosity (the total energy output a.k.a the real brightness) of Altair hasn't changed, we can divide our two measured fluxes and plug in the equation from above twice:

$$\dfrac{F_{10}}{F} = \dfrac{\left(\dfrac{\mathrm{Luminosity}}{4\pi (10~pc)^2}\right)}{\left(\dfrac{\mathrm{Luminosity}}{4\pi r^2}\right)} = \dfrac{\dfrac{1}{(10~pc)^2}}{\dfrac{1}{r^2}} = \dfrac{r^2}{(10~pc)^2} = \left(\dfrac{r}{10~pc}\right)^2$$

And we are almost done! Since the luminosity hasn't changed, it can cancel out along with the other constants. We are left with a relation between flux and distance. By taking this ratio of fluxes and plugging them into the magnitude equation above, we find:

$$100^{(m-M)} = \dfrac{F_{10}}{F} = \left(\dfrac{r}{10~pc}\right)^2$$

where we have used M to refer to the star's absolute magnitude since we are viewing it from 10 parsecs away. Take a moment to think about what this equation is saying. All we need to know about a star is its distance from us and how bright it appears on the sky and we can calculate its absolute magnitude!

## Questions

- Why do we care about the magnitude system?
- When would we use apparent and absolute magnitudes?

## Takeaways

The magnitude system allows us to easily compare the brightnesses of stars we study without worrying about complicated long numbers or confusing units. It is a standard system that allows us to comare all types of fascinating objects in space with only a few small numbers.

Scientists use apparent magnitudes to figure out how bright objects are in the sky. With our naked eyes, we can see objects with absolute magnitudes lower than 6. (Remember lower magnitudes mean brighter objects!) With binoculars, we can see stars up to absolute magnitudes of 10, almost fifty times dimmer! Finally, with big space telescopes like the James Webb Space Telescope, we can see magnitudes of over 30! That's over 4.3 billion times dimmer than what we can see with our naked eyes!!

<!-- when would we use absoulte mags? -->

## Activity

<!-- python continuation, turning fluxes into mags into app mags with distances (due to parallax) -->