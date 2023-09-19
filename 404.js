const follower = document.getElementById("follower");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Update the position of the follower element
  follower.style.left = (x-25) + "px";
  follower.style.top =  (y-25) + "px";
});
