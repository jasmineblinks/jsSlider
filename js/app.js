let index = 0;
handleImages(index);
function handleImages(i) {
  index += 1;

  let image = document.getElementsByClassName("images");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < image.length; i++) image[i].style.display = "none";
  for (i = 0; i < next.length; i++)
    next[i].className = next[i].className.replace("active", "");
  if (index > image.length - 1) index = 0;
  if (index < 0) index = image.length - 1;
  image[index].style.display = "block";
  next[index].className += "active";
}
