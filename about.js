document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number");
    const section4 = document.querySelector(".section4");

    const startCounting = () => {
        numbers.forEach((number) => {
            const target = +number.getAttribute("data-target");
            const increment = target / 150; 

            let count = 0;
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    number.textContent = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    number.textContent = target;
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                startCounting();
                observer.disconnect(); 
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(section4);
});