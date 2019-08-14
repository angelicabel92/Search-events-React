import React, { Component } from 'react';

import { CategoryConsumer } from '../context/CategoryContext';
import { EventsConsumer } from '../context/EventsContext';

class FromComponent extends Component {
    state = {
        name: '',
        category: ''
    }

    handleChange = e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <EventsConsumer>
                {(value) => {
                    return (
                        <form 
                        onSubmit= {e => {
                            e.preventDefault();
                            value.getEvents(this.state);
                        }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk="true">
                                    <input 
                                    type="text" 
                                    name="name"
                                    className="uk-input"
                                    placeholder="Nombre de evento o ciudad"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div className="uk-margin" uk="true">
                                <select 
                                name="category" 
                                className="uk-select"
                                onChange={this.handleChange}>
                                    <option value="">--Seleccione Categoría--</option>
                                    <CategoryConsumer>
                                        {(value) => {
                                            return (
                                                value.categories.map(category => (
                                                    <option key={category.id} value={category.id} data-uk-form-select>
                                                        {category.name_localized}
                                                    </option>
                                                ))
                                            )
                                        }}
                                    </CategoryConsumer>
                                </select>
                                </div>
                                <div>
                                    <input 
                                    type="submit" 
                                    className="uk-button uk-button-danger"
                                    value="Buscar eventos"
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventsConsumer>
        )
    }
}

export default FromComponent;
