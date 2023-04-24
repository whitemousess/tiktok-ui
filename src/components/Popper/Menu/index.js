import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [] ,hideOnClick = false, onChange = defaultFn}) {
    // dùng useState để khai báo history mặc định
    const [history, setHistory] = useState([{ data: items }]);
    
    
    // trở về popper trước
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (

        // Tippy thay cho thanh menu item
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12,8]}
            // disable hide menu when click avatar
             hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                   {/* PopperWrapper là items trong tippy */}
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                       <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}

            // trở về phần tử đầu tiên khi hover ra ngoài
            onHide = {() => setHistory((prev) => prev.slice(0, 1)) }
        >
            {children}
        </Tippy>
    );
}

export default Menu;
