import React from "react";

export default class ProductList extends React.Component {
    constructor (props){
        super(props)
        this.state = {data : []}
    }

    componentDidMount(){
        this.getProductList()
    }

    getProductList = async () => {
        let res = await fetch("https://reqres.in/api/products");
        let products = await res.json();
    
        this.setState({ data: products.data });
    }

    render(){
        return(
            <div className="productList">
                <h3>Product List</h3>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Colour</th>
                        <th>Pantone</th>
                        <th>Year</th>
                    </tr>

                    {this.state.data.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                                <div className="colour"
                                style = {{backgroundColor: `${product.color}`,}}/>
                            </td>
                            <td>{product.pantone_value}</td>
                            <td>{product.year}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}