import _ from 'lodash';
import greeting from '../logic/greeting'


function getMessage (){
  return fetch('/api/greeting/hugbi').then(res =>
    res.json()
    ).then(json =>{
      return json.greeting
    }).catch(err => err);
}
function component() {
  let element = document.createElement('div');
  const helloGreeting = greeting('name');
  if (process.env.NODE_ENV !== 'production') {
    console.log('you are in devel mode');
  }
  getMessage().then(val => element.innerHTML = _.join([helloGreeting]))
  return element;
}
document.body.appendChild(component());