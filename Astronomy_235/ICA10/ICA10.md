# ICA 10 - Guide for MESA
## SETUP

#### Open iTerm2 (Command + Space to search for it)

`cd $MESA/Astronomy\ 235/F23`

`open .`

#### Make a new folder called ICA10.

#### Go back to iTerm

`cd ICA10`

`cp -r $MESA/.Astro235/custom_suite/{CHOICE OF MASS}M_Star .`

`cd {CHOICE OF MASS}M_Star`

## RUNNING YOUR MODEL

#### Now that you ahve your model copied into your folder, run the following commands to start your model:

`./mk`

`./rn`

## IF INSTRUCTED

#### If your group's model will not finish in time (we will tell you in class) watch your model evolve for ~20 minutes and then run these following commands:

`CTRL + C to stop model`

`cp $MESA/.Astro235/custom_suite_completed/{CHOICE OF MASS}M_Star/png/* ./png`

`cp $MESA/.Astro235/custom_suite_completed/{CHOICE OF MASS}M_Star/photos/* ./photos`

`./re x{MODEL NUMBER}`

## MAKING A MOVIE

#### To make movies from your images

`./make_movies`

#### Then type

`open movies`

#### Each plot has been saved to a separate video and all the plots have been stitched together into a video titled `Final_Evolution.mp4`

#### Open this file with `VLC Media Player`. You can change the speed it plays at by clicking the `Playback` tab and moving the slider.

## (OPTIONAL) ACCESS ALL MOVIES

#### To view all the movies from all models, make sure you are in you ICA10 folder in iTerm. (If you aren't sure where you are, you can type `pwd` and navigate there yourself using the command line tips found in ICA9. Alternatively you can type the following command: `cd $MESA/Astronomy\ 235/F23`)

`mkdir all_movies`

`cp $MESA/.Astro235/custom_suite_movies/* ./all_movies`

`open all_movies`

#### Enjoy!
