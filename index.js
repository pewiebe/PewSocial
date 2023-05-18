// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// TEMA
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



// =========================== SIDEBAR =========================

// remover ativador de todo os items de menu 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// =========================== MESSAGES =========================
// procurar mensagens
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}


// procurar conversa
messageSearch.addEventListener('keyup', searchMessage);

// destaca seu cartão de mensagens quando o item de menu de mensagens é clicado
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// TEMA/DISPLAY CUSTOMIZAÇÃO 

// abri modos
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// fechar modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// fechar modo
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);



// =================================== FONTS ================================

// Remover classe ativa de extensões ou seletores de tamanho de fonte
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----stick-top-left', '5.4rem');
            root.style.setProperty('----stick-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----stick-top-left', '5.4rem');
            root.style.setProperty('----stick-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----stick-top-left', '-2rem');
            root.style.setProperty('----stick-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----stick-top-left', '5rem');
            root.style.setProperty('----stick-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----stick-top-left', '-10rem');
            root.style.setProperty('----stick-top-right', '-33rem');
        }

        // Alterar o tamanho da fonte do elemento HTML raiz
        document.querySelector('html').style.fontSize = fontSize;
    })

})


// Remover classe ativa das cores
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// alterar cores primárias
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // alterar cores primárias
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 200;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// valores de BACKGROUND do tema
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// altera a cor do plano de fundo
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}


// Alterar cores de fundo
Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remover classe ativa dos outros
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // Remover alterações personalizadas do armazenamento local
    window.location.reload();
});




Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Adicionar classe ativa
    Bg2.classList.add('active');
    // remover classe ativa dos outros
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Adicionar classe ativa
    Bg2.classList.add('active');
    // remover classe ativa dos outros
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})