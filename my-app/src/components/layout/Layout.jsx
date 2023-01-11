import { cx } from "@emotion/css";
import Navbar from "../navbar/Navbar";

const Layout = (children, className) => {
    return (
        <div 
        className={cx(
            className,
            'flex flex-col justify-center pd-8'
        )}
        >
            <Navbar />
            <div>{ children}</div>
        </div>
    );
};

export default Layout;