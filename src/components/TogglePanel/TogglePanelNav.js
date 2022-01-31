import cn from 'classnames';
import {array, func, number} from "prop-types";

const TogglePanelNav = ({data, activeTab, setActiveTab, activeTabRef}) => {
    return data.map(item => {
        const {toggleBtnTitle, id} = item;

        return (
            <div
                ref={activeTab === id ? activeTabRef : null}
                key={id}
                className={cn({active: activeTab === id, 'togglePanel__nav_item': true})}
                onClick={() => setActiveTab(id)}
            >
                {toggleBtnTitle}
            </div>
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