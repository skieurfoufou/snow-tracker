import styles from "./Snow.module.css";
import React, { useState, useEffect, useCallback } from "react";
import useResortSnowInfo from "../../hooks/useResortSnowInfo";
import ImageContainer from "./ImageContainer/ImageContainer";
import InputLabel from "../../components/InputLabel/InputLabel";
import Card from "../../components/Card/Card";

function Snow() {
  const [resort, setResort] = useState("");
  const { isError, error, isLoading, data, fetchData } = useResortSnowInfo("");

  useEffect(() => {
    if (!resort) return;
    fetchData(resort);
  }, [resort]);

  useEffect(() => {
    console.log(data);
  }, []);

  const handleOnChange = useCallback((resortParam: string) => {
    setResort(resortParam);
  }, []);

  if (isError) {
    return <>Error: {error?.msg}</>;
  } else if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.container}>
      <ImageContainer />
      <InputLabel
        title="Which resort are you interested in ?"
        handleOnChange={handleOnChange}
      />
      <div className={styles.card_container}>
        {data && (
          <Card
            dataTitle1={data.region}
            dataTitle2={data.topLiftElevation}
            dataTitle3={data.botLiftElevation}
            dataTitle4={data.freshSnowfall}
            dataTitle5={data.lastSnowfallDate}
            dataTitle6={data.topSnowDepth}
            dataTitle7={data.botSnowDepth}
            title={data.name}
            title1="Country: "
            title2="Top Lift-Elevation: "
            title3="Bottom Lift-Elevation: "
            title4="Fresh Snowfall: "
            title5="Last Snowfall-Date: "
            title6="Top Snow-Depth: "
            title7="Bottom Snow-Depth: "
            fontColor1="fontColorBlue"
            fontColor2="fontColorBlue"
            fontColor3="fontColorBlue"
            borderColor="CardBlue"
          />
        )}
      </div>
    </div>
  );
}

export default Snow;
