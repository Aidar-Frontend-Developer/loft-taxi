import React from 'react';
import { Wrapper, Button, List, Item } from './StyledHeader';
import Logo from '../shared/Logo';

const Header = ({ page, setPage }) => {
    const onClick = (link) => {
        return () => setPage(link);
    };

    return (
        <div className="container">
            <Wrapper>
                <Logo />
                <nav>
                    <List>
                        <Item>
                            <Button onClick={onClick('map')} active={page === 'map'}>
                                Карта
                            </Button>
                        </Item>
                        <Item>
                            <Button onClick={onClick('profile')} active={page === 'profile'}>
                                Профиль
                            </Button>
                        </Item>
                        <Item>
                            <Button onClick={onClick('login')}>Выйти</Button>
                        </Item>
                    </List>
                </nav>
            </Wrapper>
        </div>
    );
};
export default Header;
