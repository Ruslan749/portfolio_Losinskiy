function post (){
       // post

const forms = document.querySelectorAll('form');

const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.appendChild(statusMessage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
            console.log(key + " = " + value)
        });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(data => {
            console.log(data);
            statusMessage.textContent = message.success;
            form.reset();
            setTimeout(() => {
                statusMessage.remove();
            }, 2000)
        }).catch(() => {
            statusMessage.textContent = message.failure;
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);
        }).finally(() => {
            form.reset();
        });
    });
}
}
export default post;