/*@ngInject*/
export default function stateConfig($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: require('../controllers/login/login-page.controller.html'),
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('secure', {
            abstract: true,
            resolve: {
                user: (userService) => {
                    return userService.getUser()
                }
            },
            template: '<ui-view/>'
        })
        .state('hello', {
            url: '/hello',
            template: require('../controllers/hello/hello.controller.html'),
            controller: 'HelloController',
            controllerAs: 'vm'
        })
        .state('secure.home', {
            url: '/',
            template: require('../controllers/home-page/home-page.controller.html'),
            controller: 'HomePageController',
            controllerAs: 'vm'
        });
}