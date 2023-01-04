import { NavLink } from "react-router-dom";

export function Link(props) {
    const { children, href, to } = props;
    return to !== undefined
        ? <NavLink to={to} style={{textDecoration: "none" }}>{children}</NavLink>
        : <a href={href} style={{textDecoration: "none" }}>{children}</a>
}