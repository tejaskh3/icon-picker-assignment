import React, { useState } from "react";
import * as FeatherIcons from "react-icons/fi";

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onIconSelect,
}) => {
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const allIcons = Object.keys(FeatherIcons).map(
    (iconName) => FeatherIcons[iconName]
  );
  const totalPages = Math.ceil(allIcons.length / iconsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleIconClick = (icon) => {
    onIconSelect(icon);
  };

  const renderIcons = () => {
    const startIndex = (currentPage - 1) * iconsPerPage;
    const selectedIcons = allIcons.slice(startIndex, startIndex + iconsPerPage);

    return selectedIcons.map((Icon, index) => (
      <div
        key={index}
        style={{
          width: iconWidth,
          height: iconHeight,
          display: "inline-block",
          cursor: "pointer",
          padding: "2px",
          margin: "1px",
        }}
        onClick={() => handleIconClick(Icon)}
      >
        <Icon style={{ width: "100%", height: "100%" }} />
      </div>
    ));
  };

  return (
    <div
      style={{
        width: pickerWidth,
        height: pickerHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {renderIcons()}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IconPicker;
