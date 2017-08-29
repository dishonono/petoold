import PropTypes from 'prop-types';
import React from 'react';
import Restaurant from './Restaurant.jsx';

export default class RestaurantsList extends React.Component {


    static propTypes = {
        id: PropTypes.string,
        genres: PropTypes.array,
        restaurants: PropTypes.array
    };

    render() {

        return (
            <div id={this.props.id}>

                {this.props.restaurants.map(rest => {
                        let icon = 'F';
                        if (rest.genre_id) {
                            let gens = this.props.genres.filter((g)=> g.id==rest.genre_id);
                            if (gens.length > 0) {
                                if (gens[0].icon) {
                                    icon = gens[0].icon;
                                }
                            }
                        }
                        return <Restaurant key={rest.id}
                                           name={rest.name}
                                           ten_bis={rest.ten_bis}
                                           icon={icon}
                                           rating={rest.rating}/>
                    }
                )}
            </div>
        );
    }
}