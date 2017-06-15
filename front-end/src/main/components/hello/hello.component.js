import HelloPage from './hello.controller';
// import './home-page.component.scss';

const HelloComponent = {
    template: require('./hello.component.html'),
    controller: HelloPage ,
    controllerAs: 'vm',
    bindings: {
        user: '<'
    }
};

export default angular
    .module('helloModule', [])
    .component('helloComponent', HelloComponent)
    .name;
