import { useState } from "react"
import { tabContent } from "../utils/data"

const TabControl = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleCurrentTab = (index) => {
        setCurrentTab(index);
    }
    return (
        <div>
            <h2>Tabs Control</h2>
            <div classname="tabsContainer">
                <div className="tabList" role="tablist">
                    
                    {tabContent.map((tab, index) => {
                        return (
                            <button key={index} className={currentTab === index ? "tabs active" : "tabs"} onClick={() => handleCurrentTab(index)} role="tab">{tab.tabName}</button>
                        )
                    })}
                </div>
                <div className="tabPanel" role="tabpanel">
                    {tabContent[currentTab].tabContent}
                </div>
            </div>
        </div>
    )
}

export default TabControl
