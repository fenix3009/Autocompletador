// Import stylesheets
import './style.css';
import 'awesomplete/awesomplete.css';
import 'awesomplete/awesomplete.js';

// Write Javascript code!
      var input = document.getElementById("myinput");
      var awesomplete = new Awesomplete(input, {
        list: [
          "Ada",
          "Java",
          "JavaScript",
          "Brainfuck",
          "LOLCODE",
          "Node.js",
          "Ruby on Rails"
        ],
        minChars: 1,
        filter: function(text, input) {
          var array = input.split(/\s+/);
          var arraylenght = array.length;
          var lastword = array[arraylenght - 1];
          return Awesomplete.FILTER_CONTAINS(text, input.match(/[^\s]*$/)[0]);
        },
        replace: function(text) {
          var valor = this.input.value;

          var array = valor.split(/\s+/);
          var arraylenght = array.length;
          var newValue = [];

          for (let index = 0; index < array.length - 1; index++) {
            const element = array[index];
            newValue.push(element);
          }

          this.input.value = newValue.join(" ") + " " + text;
        }
      });