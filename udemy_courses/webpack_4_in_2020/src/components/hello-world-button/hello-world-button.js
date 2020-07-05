// document.createElement('button');
// body.appendChild(button);


// _____________________________________________________________________

import './hello-world-button.scss'



class HelloWorldButton {
    btnClass = 'hello-world-btn';

    render() {
        const button = document.createElement('button');
        button.innerText = 'Hello world!'

        button.classList.add(this.btnClass);

        const body = document.querySelector('body');
        body.appendChild(button);   

        button.onclick = () => {
            const p =document.createElement('p');
            p.innerText = 'Hello world!'

            p.classList.add('hello-world-txt');

            body.appendChild(p);
        }


    }
}

export default HelloWorldButton;