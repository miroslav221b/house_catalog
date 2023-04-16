import React from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import RefineSearch from "./RefineSearch";
import style from "../style/components/Filters.module.scss"
import ClearFiltersButton from "./ClearFiltersButton";
const Filters = ({ allOffers }) => {
    return (
        <>
            <div className={style.filterContainer}>
                <div className={style.filters}>
                    <SearchBar />

                    <Filter
                        name={"Property Type"}
                        filterSeting={"type"}
                        optionList={[
                            { name: "All", value: "" },
                            { name: "House", value: "House" },
                            { name: "Apartment", value: "Apartment" }]} />

                    <Filter
                        name={"Type"}
                        filterSeting={"order_type"}
                        optionList={[
                            { name: "All", value: "" },
                            { name: "Rent", value: "Rent" },
                            { name: "Buy", value: "Buy" }]} />
                    <RefineSearch />
                    <ClearFiltersButton />
                </div>
            </div>
            <div className={style.SearchInfo}>
                <p>
                    Your search has {allOffers} results
                </p>
                <div className={style.sortBlock}>
                    <Filter
                        name={"Sort By"}
                        filterSeting={"sortMethod"}
                        optionList={[
                            { name: "Price descending", value: "fromTopPrice" },
                            { name: "Price ascending", value: "fromLowPrice" },
                            { name: "Total surface approx. ascending", value: "fromLowSize" },
                            { name: "Total surface approx. descendin", value: "fromTopSize" },
                        ]} />
                </div>
            </div>
        </>
    )
}
export default Filters