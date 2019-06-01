import '@babel/polyfill';
import './app.scss';

let h2 = document.createElement('h2');
h2.textContent = "Hello World";
h2.classList.add('hello-world');
document.body.append(h2);
