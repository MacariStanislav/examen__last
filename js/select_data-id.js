const buttons = document.querySelectorAll('.buy-button');

buttons.forEach(button => {//Для каждой кнопки из списка мы устанавливаем обработчик события.
    button.addEventListener('click', (event) => {
        event.preventDefault();//Это отменяет стандартное поведение элемента (в данном случае ссылку)
        const productId = button.closest('.product').getAttribute('data-id');
        window.location.href = `catalog.html?id=${productId}`;
    });
});