Vue.createApp({
    data(){
        return{
            status: true,
            favorite: true,
            data: [],
            filterData: []
        }
    },
    created(){
    },
    methods:{
        getData(){
          const url ="https://randomuser.me/api/?results=20";
          axios.get(url)
            .then((res)=>{
              this.data = res.data.results
            })
            .catch((err) => {
            console.log(err);
             });
        },
        filterMale: function (){
          return this.data = this.data.filter(item => item.gender === "male" );
        },
        filterFemale: function (){
          return this.data = this.data.filter(item => item.gender === "female" );
        },
        
    },
    mounted(){
    this.getData();
  }
}).mount('#app');