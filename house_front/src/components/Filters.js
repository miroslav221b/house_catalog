import React from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import RefineSearch from "./RefineSearch";
import { useSelector } from "react-redux";
import style from "../style/components/Filters.module.scss"
const Filters = () => {
    const shop = useSelector((state)=>{
        return state.shop
    })
    return(
    <>
        <div className={style.filterContainer}>
                <div className={style.filters}>
                    <SearchBar/>
                    
                    <Filter 
                        name={"Type"}
                        filterSeting={"type"}
                        optionList={[
                            {name:"All", value:""},
                            {name:"House", value:"House"},
                            {name:"Apartment", value:"Apartment"}]}/>

                    <Filter 
                        name={"Property Type"}
                        filterSeting={"buy_or_rent"}
                        optionList={[
                            {name:"All", value:""},
                            {name:"Rent", value:"Rent"},
                            {name:"Buy", value:"Buy"}]}/>
                    <Filter 
                        name={"Price"}
                        filterSeting={"topPrice"}
                        secFilterSeting={"lowPrice"}
                        optionList={[
                            {name:"All", value:""},
                            {name:"max. 5.000.000 CZK", value:5000000},
                            {name:"max. 10.000.000 CZK", value:10000000},
                            {name:"max. 15.000.000 CZK", value:15000000},
                            {name:"max. 20.000.000 CZK", value:20000000},

                            {name:"max. 30.000.000 CZK", value:30000000},
                            {name:"max. 40.000.000 CZK", value:40000000},
                            {name:"max. 50.000.000 CZK", value:50000000},
                            {name:"max. 60.000.000 CZK", value:60000000},

                            {name:"max. 100.000.000 CZK", value:100000000},
                            {name:"max. 200.000.000 CZK", value:200000000},
                            {name:"≥ 200.000.000 CZK", secValue:200000000},]}/>
                    <Filter 
                        name={"Living Area"}
                        filterSeting={"fromLivingArea"}
                        secFilterSeting={"toLivingArea"}
                        optionList={[
                            {name:"All", value:""},
                            {name:"≤ 51 m2", secValue:51},
                            {name:"51 - 100 m2", value:51, secValue:100},
                            {name:"101 - 150 m2", value:101, secValue:150},
                            {name:"151 - 200 m2", value:151, secValue:200},
                            {name:"201 - 250 m2", value:201, secValue:250},
                            {name:"≥ 300 m2", value:300}
                            ]}/>

                    <RefineSearch/>
                </div> 
            </div>
            <div className={style.SearchInfo}>
                    <h1>
                        Your search has {shop.helperInfo.allOffers} results
                    </h1>
                    <div className={style.sortBlock}>
                        <Filter 
                                name={"Sort By"}
                                filterSeting={"sortMethod"}
                                optionList={[
                                    {name:"Price descending", value:"fromTopPrice"},
                                    {name:"Price ascending", value:"fromLowPrice"},
                                    {name:"Total surface approx. ascending", value:"fromLowSize"},
                                    {name:"Total surface approx. descendin", value:"fromTopSize"},
                                    ]}/>   
                    </div>
                </div>
        </>
    )
}
export default Filters