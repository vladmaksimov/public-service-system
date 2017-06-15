/*@ngInject*/
export default function HelloController(message) {

    return {
        $onInit: $onInit
    };

    function $onInit() {
        this.message = "hgf";
    }

}