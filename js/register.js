const overlay = document.getElementById('overlay');
const registerPanel = document.getElementById('registerPanel');
const closeBtn = document.getElementById('closeBtn');
const userElement = document.getElementById('user');
const circulElement = document.querySelector('.circul');


function openRegistrationPanel() {
    overlay.style.display = 'block';
    registerPanel.style.display = 'block';


    setTimeout(() => {
        overlay.style.opacity = '1';
        registerPanel.style.opacity = '1';
        registerPanel.style.transform = 'translateY(-50%) translateX(0)';
    }, 10); 
}


userElement.addEventListener('click', openRegistrationPanel);  
circulElement.addEventListener('click', openRegistrationPanel);  


closeBtn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    registerPanel.style.opacity = '0';
    registerPanel.style.transform = 'translateY(-50%) translateX(100%)';

    
    setTimeout(() => {
        overlay.style.display = 'none';
        registerPanel.style.display = 'none';
    }, 300);
});


overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    registerPanel.style.opacity = '0';
    registerPanel.style.transform = 'translateY(-50%) translateX(100%)';

   
    setTimeout(() => {
        overlay.style.display = 'none';
        registerPanel.style.display = 'none';
    }, 300); 
});