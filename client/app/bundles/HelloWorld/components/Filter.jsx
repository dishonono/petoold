import PropTypes from 'prop-types';
import React from 'react';


export default class Filter extends React.Component {
    static propTypes = {
        title : PropTypes.string,
        hint : PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        keys: PropTypes.array.isRequired,
        values: PropTypes.array,
        update: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            numeric:  false
        };
    }

    updateFilters = (field, value) => {
        this.props.update(field,
            value ?
                this.state.numeric ? (expected) =>  expected == parseInt(value)  : (expected) =>  expected.toLowerCase().includes(value.toLowerCase())
                : (expected) =>  true // always true function when value is not set
        );
    };

    componentWillReceiveProps(nextProps) {
        this.setState( {
            //checks that all the keys are numericm if so, field is numeric
            numeric:  nextProps.keys.reduce(
                (res,key) => res && typeof(key)==="number"
                , true)
        });
    }


}
