const redirectUrl = 'https://github.com/zSkillCode'

document.querySelector('.header-secondary__link').href = redirectUrl;

const anim = document.querySelector('.header-primary__anim');

const setAnimContent = content => anim.innerHTML = content

setInterval(() => {
    switch (anim.innerHTML) {
        case '':
            setAnimContent('.');
            break;
        case '.':
            setAnimContent('..');
            break;
        case '..':
            setAnimContent('...');
            break;
        case '...':
            setAnimContent('');
            break
        default:
            setAnimContent('');
    }
}, 500);

window.location.replace(redirectUrl);

