import React, { Component } from 'react';

class BackToTop extends Component {
    state = {
        isActive: false,
        triggerValue: 500
    };

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('resize', this.updateTriggerValue);
    }

    scrollUp = () => {
        const doc = document.documentElement;
        const top =
            (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 50);
            setTimeout(this.scrollUp, 1);
        }
    };

    handleScroll = () => {
        this.setState({
            isActive: window.pageYOffset > this.state.triggerValue
        });
    };

    updateTriggerValue = () => {
        this.setState({ triggerValue: window.outerHeight }, this.handleScroll);
    };

    componentDidMount = () => {
        this.updateTriggerValue();
        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.updateTriggerValue);
    };

    render() {
        const activeClassName = this.state.isActive ? 'active' : '';
        return (
            <button
                onClick={this.scrollUp}
                className={`button button--top ${activeClassName}`}
            >
                <i className="button-icon fas fa-arrow-up" />
            </button>
        );
    }
}

export default BackToTop;
