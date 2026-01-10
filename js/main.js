document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.portfolio-container');

    if (gallery && typeof myProjects !== 'undefined') {
        gallery.innerHTML = ''; 

        myProjects.forEach((project, index) => {
            const delay = (index % 3) * 100;
            
            // Faisla: Video ya Image? (Ab Controls ke saath)
            let mediaHTML = "";
            if (project.isVideo === true && project.video) {
                mediaHTML = `<video src="${project.video}" muted loop playsinline controls style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></video>`;
            } else {
                mediaHTML = `<img src="${project.img}" class="img-fluid" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;" onclick="openLightbox('${project.img}')">`;
            }

            gallery.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="${delay}">
                    <div class="portfolio-item shadow-sm" style="background: #f8f9fa; border-radius: 10px; overflow: hidden;">
                        <div class="portfolio-img" style="height: 250px; position: relative; overflow: hidden;">
                            ${mediaHTML}
                        </div>
                        <div class="p-3 text-center">
                            <h5 class="font-weight-bold mb-1">${project.title}</h5>
                            <p class="text-muted small mb-0">${project.cat}</p>
                        </div>
                    </div>
                </div>`;
        });
    }
});

// Photo ko bada dikhane ke liye Function
function openLightbox(src) {
    window.open(src, '_blank'); // Ye photo ko naye tab mein bada kholega
}






document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SLIDER LOGIC (Home Page ke liye) ---
    const sliderContainer = document.querySelector('.carousel-inner');
    const indicatorContainer = document.querySelector('.carousel-indicators');

    if (sliderContainer && typeof sliderData !== 'undefined') {
        sliderContainer.innerHTML = ''; 
        indicatorContainer.innerHTML = '';

        sliderData.forEach((slide, index) => {
            const isActive = index === 0 ? 'active' : '';
            indicatorContainer.innerHTML += `<li data-target="#homeCarousel" data-slide-to="${index}" class="${isActive}"></li>`;
            sliderContainer.innerHTML += `
                <div class="carousel-item ${isActive}">
                    <img src="${slide.img}" class="d-block w-100" style="height: 600px; object-fit: cover;">
                    <div class="carousel-caption d-none d-md-block" style="background: rgba(0,0,0,0.5); border-radius: 15px;">
                        <h1 class="display-3 text-white">${slide.title}</h1>
                        <p class="lead">${slide.sub}</p>
                        <a href="${slide.btnLink}" class="btn btn-cyan btn-lg">${slide.btnText}</a>
                    </div>
                </div>`;
        });
    }

    // --- 2. PORTFOLIO LOGIC (Project Page ke liye) ---
    const gallery = document.querySelector('.portfolio-container');
    if (gallery && typeof myProjects !== 'undefined') {
        gallery.innerHTML = ''; 
        myProjects.forEach((project, index) => {
            const delay = (index % 3) * 100;
            let mediaHTML = "";
            
            if (project.isVideo === true && project.video) {
                mediaHTML = `<video src="${project.video}" muted loop playsinline controls style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></video>`;
            } else {
                mediaHTML = `<img src="${project.img}" class="img-fluid" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;" onclick="window.open('${project.img}', '_blank')">`;
            }

            gallery.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="${delay}">
                    <div class="portfolio-item shadow-sm" style="background: #f8f9fa; border-radius: 10px; overflow: hidden;">
                        <div class="portfolio-img" style="height: 250px; position: relative; overflow: hidden;">
                            ${mediaHTML}
                        </div>
                        <div class="p-3 text-center">
                            <h5 class="font-weight-bold mb-1">${project.title}</h5>
                            <p class="text-muted small mb-0">${project.cat}</p>
                        </div>
                    </div>
                </div>`;
        });
    }
});