import { useState, useEffect } from "react";
import * as FeatherIcons from "react-icons/fi";

const useIconPickerData = (rowsInOnePage, columnsInOnePage) => {
  const [iconsPerPage, setIconsPerPage] = useState(0);
  const [allIcons, setAllIcons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const calculateIconsData = () => {
      const iconsPerPageCount = rowsInOnePage * columnsInOnePage;
      const allIconsArray = Object.keys(FeatherIcons).map(
        (iconName) => FeatherIcons[iconName]
      );
      const totalPagesCount = Math.ceil(
        allIconsArray.length / iconsPerPageCount
      );

      setIconsPerPage(iconsPerPageCount);
      setAllIcons(allIconsArray);
      setTotalPages(totalPagesCount);
    };

    calculateIconsData();
  }, [rowsInOnePage, columnsInOnePage]);

  return { iconsPerPage, allIcons, totalPages };
};

export default useIconPickerData;
