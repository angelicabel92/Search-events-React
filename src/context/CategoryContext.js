import React, { Component } from 'react';
import axios from 'axios';
//Crear context
const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends Component {
    token = '32GXB5UIGIEBJXOW7AQ4';

    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categories = await axios.get(url);

        this.setState ({
           categories: categories.data.categories
        })
    }
    

    render() {
        return (
            <CategoryContext.Provider value= {{
                categories: this.state.categories
            }}>
            {this.props.children}
            </CategoryContext.Provider>
        )
    }
}

export default CategoryProvider;
