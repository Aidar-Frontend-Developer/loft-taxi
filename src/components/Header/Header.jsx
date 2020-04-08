import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from '../shared/Logo';

import { Wrapper, Button, List, Item } from './StyledHeader';

class Header extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
    };

    onClick = link => this.props.setPage(link);

    render() {
        const { page } = this.props;
        return (
            <div className="container">
                <Wrapper>
                    <Logo />
                    <nav>
                        <List>
                            <Item>
                                <Button onClick={this.onClick('map')} active={page === 'map'}>
                                    Карта
                                </Button>
                            </Item>
                            <Item>
                                <Button
                                    onClick={this.onClick('profile')}
                                    active={page === 'profile'}
                                >
                                    Профиль
                                </Button>
                            </Item>
                            <Item>
                                <Button onClick={this.onClick('login')}>Выйти</Button>
                            </Item>
                        </List>
                    </nav>
                </Wrapper>
            </div>
        );
    }
}

export default Header;
