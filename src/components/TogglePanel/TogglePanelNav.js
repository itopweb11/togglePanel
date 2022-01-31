import {NavItem, NavLink} from "reactstrap";
import cn from 'classnames';
import {array, func, number} from "prop-types";

const TogglePanelNav = ({data, activeTab, setActiveTab}) => {
    return data.map(item => {
        const {toggleBtnTitle, id} = item;

        return (
            <NavItem key={id}>
                <NavLink
                    className={cn({active: activeTab === id, })}
                    onClick={() => setActiveTab(id)}
                >
                    {toggleBtnTitle}
                </NavLink>
            </NavItem>
        )
    })
}

TogglePanelNav.propTypes = {
    data: array,
    activeTab: number,
    setActiveTab: func
}

TogglePanelNav.defaultProps = {
    data: [],
    activeTab: 0,
    setActiveTab: () => {}
}

export default TogglePanelNav;