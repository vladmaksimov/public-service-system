import {HelloPage, helloDirectiveLinkFunc} from './hello.controller'
function helloDirective() {

    return {
        template: `<h1>Hello, {{vm.message}} </h1>`,
        controller: HelloPage,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        bindToController: {
            message: '='
        },
        link: helloDirectiveLinkFunc
    };
}

export default angular
    .module('helloDirective', [])
    .directive('hello', helloDirective)
    .name;