var AjaxStubber = function () { };

AjaxStubber.originalAjax = $.ajax;

AjaxStubber.stubSuccess = function (data) {
    data = data || "";
    $.ajax = function (args) {
        args.success(data);
    };
};

AjaxStubber.stubError = function (response, code, error) {
    $.ajax = function (args) {
        args.error(response, code, error);
    };
};

AjaxStubber.revertToOriginalAjax = function () {
    $.ajax = AjaxStubber.originalAjax;
};