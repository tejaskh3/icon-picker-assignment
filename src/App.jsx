import React, { useState } from "react";
import IconPicker from "../components/IconPicker";

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleIconSelect = (Icon) => {
    setSelectedIcon(() => Icon);
    setPickerVisible(false);
  };

  return (
    <div className="flex flex-col justify-center align-center p-10 items-center">
      <div
        onClick={() => setPickerVisible(true)}
        className="w-24 h-24 border border-black flex justify-center items-center cursor-pointer "
      >
        {selectedIcon
          ? React.createElement(selectedIcon, { size: 48 })
          : "Select Icon"}
      </div>
      {pickerVisible && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={8}
          iconHeight={60}
          iconWidth={60}
          onIconSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;
