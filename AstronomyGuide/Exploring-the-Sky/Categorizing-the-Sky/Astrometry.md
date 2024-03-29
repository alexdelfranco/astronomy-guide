---
sort: 1
---

# Astrometry

**Definition: Astrometry is the practice of mapping the 3D positions of stars and other objects in the sky.**

## Background

Telescopes changed how we understand the sky. Before telescopes, stars were located by eye and their locations were documented in star charts. These charts took many forms, from large scrolls to tightly bound books. They were very delicate and usually very expensive.

Once telescopes were invented, we realized there were so many more stars in the sky than we ever could have imagined. Astronomers began keeping even more detailed charts and books. Many of these are still in use today!

## Learning Goals & Questions

- There are so many stars! Do we have names for all of them?
- How do we locate a star in the sky? Once we find it, how do we remember its location?

## Takeaway

It turns out we do have names for all the stars we can see. For centuries, astronomers have been naming and organizing stars in the sky. Around 100 years ago, an intrepid group of women observed, catalogued, and analyzed hundreds of thousands of stars. Known as the Harvard Astronomers, they are responsible for documenting many of the stars we speak about today. We will talk about many of them later in this course!

**Catalogs**: Lists of stars are called catalogs. Along with the names of thousands of stars, catalogs will include other facts about a star, such as its location, brightness, and age. You can access dozens of catalogs online for free! <a href="http://simbad.u-strasbg.fr/simbad/sim-basicIdent=m33&submit=SIMBAD+search" target="_blank">Simbad</a>, for example, is a free, online database where you can explore all sorts of astronomical objects far outside of our solar system. We will explore Simbad later in this course!

So how do we locate stars in the sky? Astronomers developed a system of coordinates for the sky similar to longitude and lattitude on Earth. The two coordinates are called *Right Ascension* and *Declination*, commonly abbreviated as RA and Dec. With a value for RA and a value for Dec, you can locate any object on the entire sky!

Astronomers used to use long printed out catalogs to organize all the stars. Now, computers have made that job much easier.

## Activity 1

In this activity, you will take this real image of the sky, find its RA and Dec (its sky coordinates), and use those values to find the names and brightnesses of all the stars in the image! To accomplish this, we will introduce a couple of free tools used by professional astrophysisists that will be very useful later in the course.

### Exploring a Hubble Image

Here is an image of a large cluster of stars in deep space. It was taken by the Hubble Space Telescope in 2007. Let's figure out where in the sky it is located and how many stars are actually in this cluster!

<img src="https://cdn.esahubble.org/archives/images/screen/heic1509a.jpg" alt="Westerlund 2" width="600"/>

---

### Astrometry.net

Begin by opening a new tab in your favorite browser and heading to <a href="https://nova.astrometry.net" target="_blank">https://nova.astrometry.net</a>. This website is incredibly powerful: it can find the location of any image within minutes. Once you arrive at the home page, you can explore recent images uploaded by real scientists by clicking the large *Explore* button. For this activity, we want to upload our own image, so we want to instead click the *Calibrate & Share* pane right below.

Since this image is already online, select the *url* option and paste the following url: [https://cdn.esahubble.org/archives/images/screen/heic1509a.jpg](https://cdn.esahubble.org/archives/images/screen/heic1509a.jpg) which links directly to the image. Once the url is pasted in, click *Upload*. You should be redirected to a page that will automatically refresh every 10 seconds while it analyzes your image. The processing should take about 10 minutes.

---
#### Activity Questions:

While we wait for the image to process, lets examine it a bit more closely. Here are some questions to guide your thoughts:

- Why do the stars appear as plus signs? Are the plus signs real parts of the stars or are they caused by something else?
- What colors do you see in the image? Which parts have which colors?
- What color stars do you see in the image? Are there more stars of one color compared to another?

#### Answers:

It turns out that the plus signs are caused by structural supports that block part of the main mirror of telescope that took the picture. The Hubble Telescope orbits the Earth and has been taking images of space since the 1990s. Because of how the camera was built, close and bright stars have a characteristic x-shaped pattern that shows up. All stars are in fact spherical in shape. We will leave the answers to the other two questions for later in this course. Color is actually one of the best ways we can learn about space, so we need to save it for a full future chapter.

---

### WorldWide Telescope

Once you have spent a few minutes answering the above questions, check back on your *astrometry.net* tab. Once the image is processed, you should see *"Success"* written in bright green in the middle of the page next to a small version of your image. Right above *"Success"*, click on the link titled *"Go to results page"*. You should see your image with some green text on top of it and to the right you should see values for its RA and Dec. You found the star cluster!

Finally, we are able to explore another incredibly usefull and exciting astronomy tool: WorldWide Telescope. The WorldWide Telescope is a website where you can exmaine a 3D view of the sky as seen from Earth. The exciting part is that the website has copies of all the astronomy data collected in the past few decades, meaning you can find any patch of sky and see multiple different views. Navigate to <a href="https://www.worldwidetelescope.org/webclient/" target="_blank">www.worldwidetelescope.org</a> and complete the tutorial.

Once you are comfortable with the website, return to your astrometry.net tab and look for the link that says *View in WorldWide Telescope*. Click on the link and watch as the telescope finds your star cluster on the night sky. Try playing with the *Image Crossfade* slider to see how much extra resolution the Hubble Telescope (which took the original image) provides compared to the other data!

## Activity 2

Astrometry.net can do a lot more than just locate your image on the sky. In fact, it is able to identify every star in your image and find RA and Dec sky coordinates for them. To access this data though, we need something more powerful than a website. Throughout this course, we will learn and use basic Python to interface and play with astrophysical data and even make some pretty complex calculations. No background in coding or prior Python knowledge is required for any activity in this course.

To run Python on our computers, we will use Google Colaboratory (or Colab for short). Google Colab is basically Google Docs but for coding in Python. We will link to Python documents called *Notebooks* with multiple cells that you can run. You are encouraged to *"Save a copy"* of each Colab Notebook in Google Drive so that you can save your changes and your work. If you don't do this for every file, any changes you make to the code will be lost when you close or reload the tab.

For each Notebook, follow the instructions included and return to this activity page when you are finished. Happy coding!

### <a href="https://colab.research.google.com/github/alexdelfranco/astronomy-guide/blob/master/AstronomyGuide/Exploring-the-Sky/Categorizing-the-Sky/activities/astrometry.ipynb" target="_blank">Click here to access the first Python activity!</a>