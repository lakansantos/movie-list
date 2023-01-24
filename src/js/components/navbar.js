showBackgroundWhenScrolled = () => {
    let navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function(){

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > 90){
            navbar.style.background = 'rgba(1,1,1, .9)'

        } else{
            navbar.style.background = 'none';
        }

        lastScrollTop = scrollTop;
    })
}



showBackgroundWhenScrolled();

rotateIfClicked = () => {
    let avatarLogo = document.querySelector('.avatar-logo');
    let dashboard = document.querySelector('.dashboard');
    avatarLogo.addEventListener('click', function(){
        this.classList.toggle('rotateClockWise')
        dashboard.classList.toggle('active')
    })  
}

rotateIfClicked();