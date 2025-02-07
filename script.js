function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    
    function update() {
        let now = new Date().getTime();
        let progress = Math.min((now - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * range + start);
        if (progress < 1) requestAnimationFrame(update);
    }
    update();
}

animateValue("years", 0, 10, 2000);
animateValue("projects", 0, 500, 2000);
animateValue("satisfaction", 0, 95, 2000);
