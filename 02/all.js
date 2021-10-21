Vue.createApp({
    data() {
      return {
        resultNum: 0,
        num1: 0,
        num2: 0,
        operator: "+",
        history: JSON.parse(localStorage.getItem("calculateHistory")) || [],
      };
    },
    create() {},
    methods: {
      calculateNum: function () {
        switch (this.operator) {
          case "+":
            this.resultNum = this.num1 + this.num2;
            break;
          case "-":
            this.resultNum = this.num1 - this.num2;
            break;
          case "*":
            this.resultNum = this.num1 * this.num2;
            break;
          case "/":
            this.resultNum = this.num1 / this.num2;
            break;
          default:
            break;
        }
        this.showHistory();
      },
      showHistory: function () {
        this.history.push(
          `${this.num1} ${this.operator} ${this.num2} = ${this.resultNum}`
        );
        this.num1 = "";
        this.num2 = "";
        this.operator = "+";
        this.save();
      },
    },
    computed: {
      save: function () {
        if (this.history.length > 10) {
          this.history.splice(-10 - 1, this.history.length - 10);
        }
        localStorage.setItem(
          "calculateHistory",
          JSON.stringify(this.history)
        );
      },
    },
  }).mount("#app");