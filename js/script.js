var app = new Vue(
  {
    el: '#todo-list',
    data: {
      lista: [
        'Comprare vino',
        'Comprare latte',
        'Comprare uova',
        'Comprare mirtilli'
      ],
      newItem: '',
    },
    methods: {
      deleteItem: function(itemIndex){
        this.lista.splice(itemIndex, 1);
      },
      addItem: function(){
        if(this.newItem !== ''){
          this.lista.push(this.newItem);
          this.newItem = '';
        }
      }
    }
  }
);
