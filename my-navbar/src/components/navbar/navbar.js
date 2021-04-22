import HeaderLeft from './header-left/header-left';
import HeaderMiddle from './header-middle/HeaderMiddle';
import HeaderRight from './header-right/HeaderRight';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.header}>
            <HeaderLeft />
            <HeaderMiddle />
            <HeaderRight />
        </div>
    );
};

export default Navbar;