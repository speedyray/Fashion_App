class ProductList extends React.Component {
    render(){
        return(<div className= 'ui stackable items' > 
                <Product />
              </div>
          );
        }

    }

   

    class Product extends React.Component {
        render(){
            return(<div className= 'item' > 
                     <div className= 'image' >
                     <img src="images/products/image.png"/>
                     </div> 
                       <div className='middle aligned content'>
                        <div className='description'>
                           <a>Classy Middy Dress</a>
                           <p>Amazing and adorable chic-sized dress, delivered in just 3 days.</p>
                        </div>
                        <div className='extra'>
                          <span>Submitted by:</span>
                           <img
                            className='ui avatar image'
                            src='images/avatars/daniel.jpg'
                             />
                        </div>
                     
                     </div>
                  </div>
              );
            }
    
        }
        ReactDOM.render(
         <ProductList />, 
        document.getElementById('content')
        );

