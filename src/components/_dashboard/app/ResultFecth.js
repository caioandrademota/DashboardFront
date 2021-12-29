import React from 'react';
import { AppWebsiteVisits } from '.';

class ResultFetch extends React.Component{
    state = {
        results: []
    }

    componentDidMount(){
    axios
      .get('https://dashboard-sobre-violencia-default-rtdb.firebaseio.com/Tweets_Crus.json')
      .then((response) => {
        console.log(response.data);
        const fetchedResults = [];
        for(let key in response.data){
            fetchedResults.unshift(
                {
                    ...responde.data[key],
                    id: key
                }
            )
        }
        this.setState({results: fetchedResults});
    });
}

render(){
    return (
        <div>
            {this.state.results.map(result =>(
                <AppWebsiteVisits
                key={result.id}
                criacao={result.created_at}
                qtd_likes={result.likes_count}
                nome={result.screen_name}
                tweet={result.tweet}
                />
            ))}
        </div>
    )
}

}

export default ResultFetch;