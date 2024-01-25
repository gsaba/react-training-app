import * as React from "react";
import Card from "@mui/material/Card";
import ClimberCard from "./ClimberCard";
import useFetch from "./useFetch";

export default function Climbers() {

    const { data: climbers, loading, error } = useFetch('http://localhost:8080/climbers');

    return (
        <div className="App">
            { loading && <p>{loading}</p> }
            { climbers && <p></p> }
            {climbers && climbers.map((climber) => (
                <ClimberCard climber={climber}></ClimberCard>
            ))}
            { error && <p>{error}</p> }
        </div>
    );

    //const climbers = ["mario", "giorgio", "samanta"];
    //const isLoading = false;
    //const error = false;

}
