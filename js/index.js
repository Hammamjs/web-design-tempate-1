
let lis = document.querySelectorAll('.portfolio li span');
let boxes = document.querySelectorAll('.portfolio .box');



let bar = document.querySelector('.container i');
let ulLinks = document.querySelector('.container ul');



bar.onclick = () => {
    if (!(bar.classList.contains('show'))) {
        ulLinks.classList.toggle('show')
    }
}




lis.forEach(el => {
    
        removeActive(lis);

    el.addEventListener('click' , (e) => {

        

        if (e.target.dataset.type === 'all') {
            boxes.forEach(e => {
                e.style.display = 'block'
            })
        }

        if (e.target.dataset.type === 'photography') {
            boxes.forEach(e => {
                if (!(e.dataset.num === '1')) {
                    e.style.display = 'none';
                }else {
                    e.style.display = 'block';
                }
            })
        }

        if (e.target.dataset.type === 'app') {
            boxes.forEach(e => {
                if (!(e.dataset.num === '2')) {
                    e.style.display = 'none';
                }else {
                    e.style.display = 'block';
                }
            })
        }

        if (e.target.dataset.type === 'web') {
            boxes.forEach(e => {
                if (!(e.dataset.num === '3')) {
                    e.style.display = 'none';
                }else {
                    e.style.display = 'block';
                }
            })
        }

        if (e.target.dataset.type === 'print') {
            boxes.forEach(e => {
                if (!(e.dataset.num === '4')) {
                    e.style.display = 'none';
                }else {
                    e.style.display = 'block';
                }
            })
        }
    })
})




let statsSection = document.querySelector('.stats');
let count = document.querySelectorAll('.stats .number');

    let started = false;



function countUp(el) {
    let goal = el.dataset.number;
    let count = setInterval(() => {
        el.innerHTML++;
        if (el.innerHTML === goal) {
            clearInterval(count)
        }
    },1000/ goal)
}







let skillsSection = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills .skills span');








window.onscroll = () => {
    if (window.scrollY >= skillsSection.offsetTop) {
        spans.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }



        if (window.scrollY >= statsSection.offsetTop ) {
        if (!started) {
            count.forEach(e => countUp(e))
            
        }
        started = true;
    }

let toUp = document.querySelector('.top');


    if (window.scrollY >= 1200) {
        toUp.style.display = 'flex';
        toUp.onclick = function () {
            window.scroll({behavior : 'smooth' , top : 0})
        }
    }else {
        toUp.style.display = 'none';

    }
}



function removeActive(el) {

        el.forEach(e => {
            e.addEventListener('click' , (e) => {
            el.forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            })
        })

}

let links = document.querySelectorAll('nav ul li');



scrollTo(links);



function scrollTo(el) {
    el.forEach(e => {
        e.addEventListener('click' , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth',
            })
        })
    })
}