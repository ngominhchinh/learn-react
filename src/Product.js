import React, { Component } from "react";
class Product extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            list:[
                {
                    productId:1,
                    productName:"Iphone",
                    productPrice: 16
                },
                {
                    productId:2,
                    productName:"Samsung",
                    productPrice: 18
                },
                {
                    productId:3,
                    productName:"Oppo",
                    productPrice: 10
                }
            ],
            keyWord:"",
        };
    }
    add = ()=>{
        this.state.list.push({
            productId: this.state.productId,
            productName: this.state.productName,
            productPrice: this.state.productPrice,
        });
        this.setState({list: this.state.list});
    }
    sapXep = ()=>{

        this.state.list.sort((a,b)=>a.productPrice-b.productPrice);
        this.setState({list: this.state.list});
    }
    // timKiem = (keyWord)=>{

    // }
    render(){
        return(
            <>
                <div>
                    <label>Id</label>
                    <input type="text" name="productId" onChange={(e)=>this.setState({productId: e.target.value})}/>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="productName" onChange={(e)=>this.setState({productName: e.target.value})}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="productPrice" onChange={(e)=>this.setState({productPrice: e.target.value})}/> 
                </div>
                
                
                <button onClick={()=>{
                    this.add()
                }}>Add</button>
                <br></br>
                <input type="text" name="keyWord" onChange={(e)=> this.setState({keyWord: e.target.value})}/>
                <button >Tìm kiếm</button>


                <table border={1}>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price <button sort="1" onClick={()=>{this.sapXep()}}>Tăng</button></th>
                        <th>Command</th>
                    </tr>
                    {this.state.list.map((e)=>(
                        <tr>
                            <td>{e.productId}</td>
                            <td>{e.productName}</td>
                            <td>{e.productPrice}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
                
            </>
        )
    }
}
export default Product;