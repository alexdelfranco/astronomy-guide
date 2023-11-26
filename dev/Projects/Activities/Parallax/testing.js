import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
//
// // Animate function
// function animate({timing, draw, duration}) {
//
// 	// Request the start time
// 	let start = performance.now();
//
// 	// Request a single frame of animation from the window at the current time
// 	requestAnimationFrame(function animate(time) {
//
// 		// Define timeFraction such that it ranges from 0 to 1
// 		let timeFraction = (time - start) / duration;
// 		// If timeFraction surpasses 1, reset it to 1
// 		if (timeFraction > 1) timeFraction = 1;
// 		// classalculate the current animation state
// 		let progress = timing(timeFraction)
// 		// Draw the current state
// 		draw(progress);
// 		// As long as timeFraction is less than 1, continue the animation
// 		if (timeFraction < 1) {
// 			// Continue the animation
// 			requestAnimationFrame(animate);
// 		}
// 	})
// };
//
// // Call animation
// animate({
// 	// Timing function, i.e. how fast should time increase
// 	timing(timeFraction) {return timeFraction},
// 	// What happens at each frame
// 	draw(progress) {
// 		d3.select('#earth').
// 		updateEarth();
// 		updateFgPanelStars();
// 		console.log(progress * 100 + '%');
// 	},
// 	// Duration of the animation (in milliseconds)
// 	duration: 10000
// });


var x = document.createElement("BUTTON");
// var t = document.createTextNode("Click me");
// x.appendChild(t);
x.id = 'test123'
document.body.appendChild(x);

d3.select('#test123').text('clickmmeee')
