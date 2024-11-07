let styleElement = document.createElement('style');
document.head.appendChild(styleElement);

// Obtiene el tema almacenado en caché
if (localStorage.getItem('theme')) {
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
    console.log('get')
} else { // Si no existe, lo crea
    localStorage.setItem('theme', 'light');
    console.log(localStorage.getItem('theme'))
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
}

let activeButton = null;
let initialTheme = document.querySelector('html').classList[0];
let currentTheme = initialTheme;

const injectCSS = (css) => {
    styleElement.textContent = css;
};

// Intercambia el tema
const SWITCH = (button, animation) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    button.setAttribute("aria-pressed", newTheme === 'dark');
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
    currentTheme = newTheme;
    injectCSS(animation.css);
};

// Evita el spamming del botón de toggle
const updateButtonStates = () => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        if (btn === activeButton) {
            btn.disabled = false;
            btn.setAttribute("aria-pressed", currentTheme === 'dark');
        } else {
            btn.disabled = currentTheme === !initialTheme;
            btn.setAttribute("aria-pressed", "false");
        }
    });
};

// Intercambia los temas
const TOGGLE_THEME = (button, animation) => {
    if (activeButton && activeButton !== button) {
        return;
    }

    if (!document.startViewTransition) {
        SWITCH(button, animation);
        activeButton = currentTheme === 'dark' ? button : null;
        updateButtonStates();
    } else {
        const transition = document.startViewTransition(() => {
            SWITCH(button, animation);
            activeButton = currentTheme === 'dark' ? button : null;
        });
        transition.finished.then(() => {
            updateButtonStates();
        });
    }
};

// Obtiene las animaciones de tema por nombre
const getAnimationByName = (name) => {
    return ANIMATIONS.find(animation => animation.name === name);
};

// Si el tipo de animación no está definida, no hace nada
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('theme-toggle') && !event.target.disabled) {
        const animationName = event.target.dataset.animation;
        const animation = getAnimationByName(animationName);

        if (animation) {
            TOGGLE_THEME(event.target, animation);
        } else {
            console.warn(`Animation "${animationName}" not found for button:`, event.target);
        }
    }
});

// Ejecuta el estado de botón inicial (Para que sea utilizable al inicio)
updateButtonStates();