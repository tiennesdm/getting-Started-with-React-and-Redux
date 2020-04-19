import axios from 'axios';
let fetchData = ()=>{
   // let data = [];
    axios.get('/comments')
    .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.data) {
            let mydata = response.data.slice(0, 10);
            const updatedPosts = mydata.map(post => {
                return {
                    ...post,
                }
            });
            console.log(updatedPosts);
            // this.setState({ arr: updatedPosts });
            // console.log(this.state.arr);
         return updatedPosts;
            
        }

        // this.setState({ arr: response.data})
        // console.log(this.setState);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    // return data;

}
export default fetchData;