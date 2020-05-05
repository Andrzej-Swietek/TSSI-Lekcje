frontend_sec = document.getElementById('frontend-sec');
frontend_btn = document.getElementById('frontend-btn');

backend_sec = document.getElementById('backend-sec');
backend_btn = document.getElementById('backend-btn');


robotics_sec = document.getElementById('robotics-sec');
robotics_btn = document.getElementById('robotics-btn');

frontend_btn.addEventListener("click", function(){
    showCategory();
});

backend_btn.addEventListener("click", function(){
  showCategoryBackend();
});

robotics_btn.addEventListener("click", function(){
  showCategoryRobotics();
});

function showCategory(){
    if (frontend_sec.style.display === "none") {
        frontend_sec.style.display = "block";
      } else {
        frontend_sec.style.display = "none";
      }
}


function showCategoryBackend(){
  if (backend_sec.style.display === "none") {
      backend_sec.style.display = "block";
    } else {
      backend_sec.style.display = "none";
    }
}

function showCategoryRobotics(){
  if (robotics_sec.style.display === "none") {
      robotics_sec.style.display = "block";
    } else {
      robotics_sec.style.display = "none";
    }
}