import React, { Component } from 'react';

class List extends Component {
    processArray = (array, listClass, keys) => {
        let elements;

        if (keys) {
            elements = array.map((element, index) => {
                let _element;
                _element = keys.map((key, index) => {
                    if (!element[key]) {
                        return null;
                    }
                    return (
                        <li
                            key={`${listClass}-${key}-${index}`}
                            className={`${listClass}__${key}`}
                        >
                            {element[key]}
                        </li>
                    );
                });
                return (
                    <li key={`${listClass}-${index}`}>
                        <ul>{_element}</ul>
                    </li>
                );
            });
        } else {
            elements = array.map((element, index) => (
                <li key={`${listClass}-${index}`}>{element}</li>
            ));
        }

        return elements;
    };

    render() {
        const { array, listClass, keys, title } = this.props;
        const processedArray = this.processArray(array, listClass, keys);

        if (array.length === 0) {
            return null;
        }

        return (
            <div>
                <small>{title}</small>
                <ul className={listClass + ' processedList'}>
                    {processedArray}
                </ul>
            </div>
        );
    }
}

export default List;