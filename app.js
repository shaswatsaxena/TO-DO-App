var todo = {

    toggleTodoButton : $("#addTodoButton"),
    inputTodoBox : $("#inputTodoBox"),
    inputTodoField : $("#inputTodoField"),
    todoContainer : $("#todoContainer"),

    init : function () {
        todo.toggleTodoButton.on("click", todo.toggleTodoBox);
        todo.inputTodoField.on("keypress", function (event) {
            if (event.which === 13)
                todo.newTodo();
        });
        todo.todoContainer.on("mouseenter", "a" ,todo.showDelete);
        todo.todoContainer.on("mouseleave", "a" ,todo.hideDelete);
        todo.todoContainer.on("click", "a" , todo.markDone);
        todo.todoContainer.on("click" , "a .delete" ,todo.deleteTodo);
    },
    toggleTodoBox : function () {
        if (todo.toggleTodoButton.text() === "+")
            todo.toggleTodoButton.text("X");
        else
            todo.toggleTodoButton.text("+");
        todo.inputTodoBox.toggleClass("is-hidden");
    },
    newTodo : function () {
        let newTodoText = (todo.inputTodoField).val();
        (todo.todoContainer).append(`<a class="panel-block is-size-3"><i class="delete is-medium  is-hidden"></i>${newTodoText}</a>`);
        todo.inputTodoField.val("");
        $("#added").removeClass("is-hidden");
        setTimeout(function(){
            $("#added").addClass("is-hidden");
        }, 1000);
    },
    showDelete : function () {
        $(this).children().removeClass("is-hidden");
    },
    hideDelete : function () {
        $(this).children().addClass("is-hidden");
    },
    markDone : function () {
        if (!($(this).hasClass("done"))) {
            $("#completed").removeClass("is-hidden");
            setTimeout(function(){
                $("#completed").addClass("is-hidden");
            }, 1000);
        }
        $(this).toggleClass("done");
    },
    deleteTodo : function (event) {
        $(this).parent().fadeOut(250, function () {
            $(this).remove();
        });
        event.stopPropagation();
        $("#removed").removeClass("is-hidden");
        setTimeout(function(){
            $("#removed").addClass("is-hidden");
        }, 1000);
    }

};

todo.init();
