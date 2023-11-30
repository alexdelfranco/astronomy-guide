# ICA 10 - Mysterious Experiements in Stellar Astrophysics

The ancient Tomb of Stellar Evolution has just been uncovered. At its heart, it is rumored to hold some of the most fundamental secrets of the universe. But the Tomb is sealed by an inpenitrable barrier that can only be unlocked with the correct sequence of 10 letters.

Thankfully, near the tomb a magical intergalactic flash drive was unearthed with a series of 10 stellar MESA models coincidentally formatted to run on the most recent version of MacOS. (What are the chances!?) We don't know the masses of these stars. All we know is that each star is associated with a single letter of the alphabet. Maybe if we order them by increaasing mass we will have the correct code?

We have recruited you, our world's top scientists, to try to break this case. We only have one shot at opening the tomb, so be careful and precise (and ask your instructor/beloved TA if you have any questions)!

Break into groups of 2. Each group has been assigned a single star. Run your model, generate a movie, and display it on your monitor. Then roam around the room observing the 9 other movies, comparing them to each other. You may work with other groups and you are encouraged to ask any questions you can think of. Remember, you instructor & intrepid TA don't know the code, although you're free to ask. You have ~1 hour to complete this mission. Good luck, scientists.

## SETUP

#### Open iTerm2 (Command + Space to search for it)

`cd $MESA/Astronomy\ 235/F23`

`open .`

#### Make a new folder called ICA10.

#### Go back to iTerm

`cd ICA10`

`cp -r $MESA/.Astro235/custom_suite/{YOUR SELECTED LETTER}_Star .`

`cd {YOUR SELECTED LETTER}_Star`

## RUNNING YOUR MODEL

#### Now that you ahve your model copied into your folder, run the following commands to start your model:

`./mk`

`./rn`

## INTERPRETING PLOTS

#### You now have ~10-15 minutes to understand the six plots. Discuss with your partner using the questions provided below as a guide. The better you follow what is happening, the better chance you have at cracking the final code.

1. Abundance:
    - What is the y axis telling you? What would a line at `0` represent?
    - What is the x axis telling you? Can you connect this axis to radius? If so, where is the core? the surface of the star?
2. Burning Stages
    - Based on the name, what is the biggest takeaway of this plot?
    - What does the moving snake-like line represent? Do we really care about the axes?
3. Recent Model History
    - Complex and moving fast, this plot is useful for examing specific conditions in the current star.
    - Which axes correspond to which values? (note: mdot means change in mass, essentially a derivative of overall mass)
4. HR Diagram
    - This shoudl be pretty self explanatory. It resets after each stage of stellar evolution though, so be careful when looking at it too closely.
5. Nuclear Power Density
    - The x axis should look familiar! The y axis is just the amoung of energy per mass per second that is being generated.
    - Do you recognize any of the labels in the legend? Are there any that appear new to you?
    - What does the horizontal location of the peaks tell you about where fusion is taking place?
6. Radial Temperature  & Pressure
    - Another information heavy plot. The x axis here is the same as in plots (1) and (5).
    - Is the star doing what you expect? Does this plot match your predictions for the values of P and T? (note: they are logged!)

## TIME WARP

#### Your instructor has found a magical time gem that can warp time! When instructed, stop discussing plots and type the commands below.

`CTRL + C to stop model`

`cp $MESA/.Astro235/custom_suite_completed/{YOUR SELECTED LETTER}_Star/png/* ./png`

`cp $MESA/.Astro235/custom_suite_completed/{YOUR SELECTED LETTER}_Star/photos/* ./photos`

#### Ask your instructor what your group's MODEL NUMBER is, then run this command to warp close to the end of your model:

`./re x{MODEL NUMBER}`

## MAKING A MOVIE

#### Once your model is complete (or you are instructed by your instructor/magnificent TA), make a series of movies from your images by running:

`./make_movies`

#### Then type

`open movies`

#### to view the full folder.

#### Each plot has been saved to a separate video and all the plots have been stitched together into a video titled `Final_Evolution.mp4`

#### Open this file with `VLC Media Player`. (You might have to control + click on the file and choose `open with` then select `VLC`.) You can change the speed it plays at by clicking the `Playback` tab and moving the slider. Double click to make the video fullscreen.

## VIEW AND ROAM

#### You are now free! Watch your movie then explore the classroom to find other students and their movies. What characteristics could be giveaways of the mass? Are there smoking guns or just very subtle details? Did your TA test this lab at all or is he just hoping there is enough information to answer the big question?

#### The only way to find out is solve the puzzle!

## UNLOCK THE TEMPLE VAULT

#### Only once you are sure in your answer may you approach the temple:

### APPROACH