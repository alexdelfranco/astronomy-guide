---
sort: 1
---

# Plotting Code for MESA

Copy the following into the &pgstar section of the main inlist or the common inlist (if one exists).

Then change the pgstar flag to be .true. and you should be set.

Images will output to the `png` folder in the model directory.

```
! Abundance window -- current model abundance profile

	Abundance_win_flag = .true.
	Abundance_win_width = 9
	Abundance_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	Abundance_file_flag = .true.
	Abundance_file_dir = 'png'
	Abundance_file_prefix = 'Abundance_'
	Abundance_file_interval = 5 ! output when mod(model_number,Abundance_file_interval)==0
	Abundance_file_width = -1 ! (inches) negative means use same value as for window
	Abundance_file_aspect_ratio = -1 ! negative means use same value as for window

! TRho Profile window -- current model temperature pressure profile

	TRho_Profile_win_flag = .true.
	TRho_Profile_title = 'Burning Stages'
	TRho_Profile_win_width = 9
	TRho_Profile_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	TRho_Profile_file_flag = .true.
	TRho_Profile_file_dir = 'png'
	TRho_Profile_file_prefix = 'Burning_Stages_'
	TRho_Profile_file_interval = 5 ! output when mod(model_number,TRho_Profile_file_interval)==0
	TRho_Profile_file_width = -1 ! (inches) negative means use same value as for window
	TRho_Profile_file_aspect_ratio = -1 ! negative means use same value as for window

! HR Diagram window -- current model HR diagram

	HR_win_flag = .true.
	HR_title = 'HR Diagram'
	HR_win_width = 9
	HR_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	HR_file_flag = .true.
	HR_file_dir = 'png'
	HR_file_prefix = 'HR_Diagram_'
	HR_file_interval = 5 ! output when mod(model_number,HR_file_interval)==0
	HR_file_width = -1 ! (inches) negative means use same value as for window
	HR_file_aspect_ratio = -1 ! negative means use same value as for window

! Power window -- current model of power profile

	Power_win_flag = .true.
	Power_title = 'Nuclear Power Density'
	Power_win_width = 9
	Power_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	Power_file_flag = .true.
	Power_file_dir = 'png'
	Power_file_prefix = 'Nuclear_Power_Density_'
	Power_file_interval = 5 ! output when mod(model_number,Power_file_interval)==0
	Power_file_width = -1 ! (inches) negative means use same value as for window
	Power_file_aspect_ratio = -1 ! negative means use same value as for window

! Radial Temp and Pressure Plot -- current model mass profile vs pressure and temperature

	Profile_Panels6_win_flag = .true.
	Profile_Panels6_title = 'Radial Temperature & Pressure'
	Profile_Panels6_num_panels = 1
	Profile_Panels6_xaxis_name = 'mass'
	Profile_Panels6_yaxis_name = 'logT'
	Profile_Panels6_other_yaxis_name = 'logP'
	Profile_Panels6_win_width = 9
	Profile_Panels6_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	Profile_Panels6_file_flag = .true.
	Profile_Panels6_file_dir = 'png'
	Profile_Panels6_file_prefix = 'Rad_Temp_Pressure_'
	Profile_Panels6_file_interval = 5 ! output when mod(model_number,Profile_Panels6_file_interval)==0
	Profile_Panels6_file_width = -1 ! (inches) negative means use same value as for window
	Profile_Panels6_file_aspect_ratio = -1 ! negative means use same value as for window

! Model History Plot -- current model history

	History_Panels1_win_flag = .true.
	History_Panels1_title = 'Recent Model History'
	History_Panels1_win_width = 9
	History_Panels1_win_aspect_ratio = 0.75 ! aspect_ratio = height/width

	History_Panels1_file_flag = .true.
	History_Panels1_file_dir = 'png'
	History_Panels1_file_prefix = 'Model_History_'
	History_Panels1_file_interval = 5 ! output when mod(model_number,History_Panels1_file_interval)==0
	History_Panels1_file_width = -1 ! (inches) negative means use same value as for window
	History_Panels1_file_aspect_ratio = -1 ! negative means use same value as for window

```
