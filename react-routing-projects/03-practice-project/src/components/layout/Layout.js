import classes from './Layout.module.css';
import MainHeader from './MainHeader';

const Layout = (props) => {
    return <div>
        <MainHeader />
        <main>{props.children}</main>
    </div>
}

export default Layout;