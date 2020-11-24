var app = new Vue ({
    el: '#app',
    data: {
        emails:[],
    },
    created() {
        this.ten();

        
    },
    methods: {
        ten() {
            
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            // handle success
            this.emails.push(response.data.response);
          })
          .catch( (error) => {
            // handle error
            console.log(error);
          }); 
         }

        },

    },
});