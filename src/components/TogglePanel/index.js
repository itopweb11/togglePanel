import {useEffect, useRef, useState} from "react";
import {array} from 'prop-types';
import TogglePanelNav from "./TogglePanelNav";
import {TabContent} from "reactstrap";
import TogglePanelContent from "./TogglePanelContent";
import useWindowSize from "../../hooks/useWindowSize";

const TogglePanel = ({data}) => {
    const ANIMATION_BLOCK_HEIGHT = 44;
    const [windowWidth] = useWindowSize();
    const activeTabRef = useRef(null);
    const togglePanelNavRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const [activeTabPosition, setActiveTabPosition] = useState(0);
    const [togglePanelNavPosition, setTogglePanelNavPosition] = useState(0);

    const animationStyles = {
        height: ANIMATION_BLOCK_HEIGHT || 0,
        width: activeTabPosition.width || 0,
        left: (activeTabPosition.left - togglePanelNavPosition.left) || 0,
        top: (activeTabPosition.top - togglePanelNavPosition.top - (ANIMATION_BLOCK_HEIGHT - activeTabPosition.height) / 2) || 0
    }

    useEffect(() => {
        setActiveTabPosition(activeTabRef.current.getBoundingClientRect())
        setTogglePanelNavPosition(togglePanelNavRef.current.getBoundingClientRect())
    }, [activeTabRef, togglePanelNavRef, activeTab, windowWidth])

    return (
        <div className="togglePanel border p-3 mt-5">
            <div
                ref={togglePanelNavRef}
                className="togglePanel__nav"
            >
                <TogglePanelNav
                    data={data}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    activeTabRef={activeTabRef}
                />
                {
                    activeTabRef && togglePanelNavRef
                        ? <div className="animation start-home" style={animationStyles} />
                        : null
                }
            </div>
            <TabContent activeTab={activeTab} className="p-2 mt-4">
                <TogglePanelContent  data={data} />
            </TabContent>
        </div>
    )
}

TogglePanel.propTypes = {
    data: array.isRequired
}

TogglePanel.defaultProps = {
    data: []
}

export default TogglePanel;