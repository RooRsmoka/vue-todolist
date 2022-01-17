new Vue({
    el: '#app',
    data: {
        heading: 'TodoList',
        todoList: [
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Fare il bucato',
                done: true,
            },
            {
                text: 'Svuotare la lavastoviglie',
                done: false,
            },
        ],
        newAction: '',
    },
    methods: {
        addAction: function() {
            this.todoList.push({text: this.newAction, done: false});
            this.newAction = '';
        },
        removeAction: function(index) {
            this.todoList.splice(index, 1)
        }
    }
})