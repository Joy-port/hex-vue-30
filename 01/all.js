Vue.createApp({
    data(){
        return{
            status: true,
            favorite: true,
            data: [],
            genderFilter: ''
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
//         filterMale: function (){
//           return this.data = this.data.filter(item => item.gender === "male" );
//         },
//         filterFemale: function (){
//           return this.data = this.data.filter(item => item.gender === "female" );
//         },
        
    },
    computed:{
        filterGender(){
        const newData = this.data.filter(item =>{
            return item.gender === this.genderFilter
        })
        return newData ;
        }
    },
    mounted(){
    this.getData();
  }
}).mount('#app');
