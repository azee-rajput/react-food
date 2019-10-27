import React, {Component} from 'react';
import List from './list';
import Ingredients from './ingredients';


class Recipe extends Component{
    constructor(props){
        super(props);
        this.state={
            data : [],
            ingredients : [],
            measuring : [],
            update : false
        }
    }

    componentDidMount(){
        const idMeal = this.props.match.params.idmeal;
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+idMeal)
        .then(response => response.json())
        .then(json => this.setState({
            data : json.meals[0],
            update : true
        }))

        
    }

    componentDidUpdate(){
        if(this.state.update){
            this.setState({
                update:false
            })
            const strData = JSON.stringify(this.state.data)
            const arrData = JSON.parse(strData)
            const chabi = Object.keys(arrData)
            const valu = Object.values(arrData)
            const allIng= []
            const allmeasure=[]
            //console.log(valu)
            for(let i = 9; i < 29; i++){
                if(valu[i] === null || valu[i]===""){
                    break;
                }
                allIng.push(valu[i])
                allmeasure.push(valu[i+20])
            }
            // for(let i = 29; i < 51; i++){
            //     if(valu[i] === null || valu[i]===""){
            //         break;
            //     }
            //     allmeasure.push(chabi[i])            
            // }
            console.log(allIng);
            this.setState({ 
                measuring : allmeasure,
                ingredients : allIng
            })
        }
    }

    tab() {
        var counter = 0;
        return(
            <table className="table-borderless" cellPadding="10px" style={{margin:"auto"}}>
                <thead>
                    <tr>
                        <th align="center">Ingredients</th>
                        <th align="center">Measuring</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ingredients.map((ing)=>(
                        <tr>
                            <td align="center">{ing}</td>
                            <td align="center">{this.state.measuring[counter++]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
        
    }
    
    render(){
        
        // const ingredients = this.state.ingredients.map((ing)=>{
        //     return(
        //            <tr><td>{ing}</td></tr> 
        //     )
        // })

        // const measuring = this.state.measuring.map((measure)=>{
        //     return(
        //            <tr><td>{measure}</td></tr>
        //     )
        // })



        return(
            <div style={{marginTop:"2%"}}>

                <div className="row shadow p-3 mb-5 bg-white rounded"
                style={{width:"90%",margin:"auto", justifyContent:"center", border:"1px solid #d3d3d3"}}>
                    <h1 className="col-sm-12 text-center"><b>{this.state.data.strMeal}</b></h1>
                    <h3 className="col-sm-12 text-center">
                        <i>{this.state.data.strCategory} | {this.state.data.strArea} | {this.state.data.strTags}</i>
                    </h3>

                    <div className="col-sm-4 row mt-5">
                        <div className = "col-sm-12"><h4 className="text-center"><b>Ingredients</b></h4>
                            {this.tab()}                                    
                        </div>
                        
                            

                            
                                
                    </div>

                    <div className="col-sm-4 mt-5">
                        <h4><b>Instructions</b></h4>
                        <p>{this.state.data.strInstructions}</p>
                    </div>

                    <div className="col-sm-4 mt-5">
                        <img src={this.state.data.strMealThumb} alt="thumbnail" style={{width:"100%", height:"auto"}}/>
                    </div>


                </div>

                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert" sliced="4" category="Dessert"/>
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken" sliced="4" category="Chicken"/>

            </div>
        )
    }
}

export default Recipe;