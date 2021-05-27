import { useContext, useEffect, useState } from "react";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";
import MainContext from "../MainContext";

function Download() {
  
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  // const { downloadUrl, setDownloadUrl } = useContext();

  // useEffect(() => {
  //   if (selectedBrands.length > 0) {
  //     let output = "";
  //     selectedBrands.map((slug) => {
  //       let brand = brands.find((brand) => brand.slug === slug);
  //       brand.colors.map((color, key) => {
  //         output += `--${slug}-${key}: #${color}`;
  //       });
  //     });
  //     const blob = new Blob(output);
  //     const url = URL.createObjectURL(blob);
  //     setDownloadUrl(url);
  //     return () => {
  //       URL.revokeObjectURL(url);
  //       setDownloadUrl("");
  //     };
  //   }
  // }, [selectedBrands]);

  // const getLink = () => {
  //   prompt(
  //     "Here's the URL to share",
  //     `http://localhost:3000/collection/${selectedBrands.join(",")}`
  //   );
  // };

  return (
    <div className="download">
      {/* <div className="actions">
        <a download="test.css" href={downloadUrl}>
          <GrDownload />
        </a>
        <button onClick={getLink}>
          <GrLink />
        </button>
      </div> */}
      <div className="selected" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands collected.{" "}
      </div>
    </div>
  );
}

export default Download;
