new Vue({
    el: '#app',
    data: {
        todoList: [
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Portare la macchina dal carrozziere',
                done: true,
            },
            {
                text: 'Svuotare la lavastoviglie',
                done: false,
            },
        ]
    },
    methods: {
        removeAction: function(index) {
            this.todoList.splice(index, 1)
        }
    }
})