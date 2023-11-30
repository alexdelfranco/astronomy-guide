---
sort: 2
---

# Make a White Dwarf Evolution Movie

### Execute these commands in the command line from your ICA9 directory
```
images_to_movie ‘png/Abundance_*.png’ movies/Abundance.mp4

images_to_movie ‘png/Burning_Stages_*.png’ movies/Burning_Stages.mp4

images_to_movie ‘png/HR_Diagram_*.png’ movies/HR_Diagram.mp4

images_to_movie ‘png/Model_History_*.png’ movies/Model_History.mp4

images_to_movie ‘png/Nuclear_Power_Density_*.png’ movies/Nuclear_Power_Density.mp4

images_to_movie ‘png/Rad_Temp_Pressure_*.png’ movies/Rad_Temp_Pressure.mp4
```

### Change directory into movies and stitch your movies together

```
cd movies

ffmpeg -i Abundance.mp4 -i Burning_Stages.mp4 -i Model_History.mp4 -filter_complex hstack=inputs=3 hstack0.mp4

ffmpeg -i HR_Diagram.mp4 -i Nuclear_Power_Density.mp4 -i Rad_Temp_Pressure.mp4 hstack=inputs=3 hstack1.mp4

ffmpeg -i hstack0.mp4 -i hstack1.mp4 -filter_complex vstack White_Dwarf_Evolution.mp4
```