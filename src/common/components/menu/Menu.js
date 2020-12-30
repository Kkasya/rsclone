import React from "react";
import {MenuLevels} from "./MenuLevels";
import {NUMBER_LEVELS} from "../../../common";

export function Menu() {
    return (
        <div>
            <MenuLevels
                title='Select a Level'
                variant="h2"
                color="secondary"
                name='Level'
                itemList={new Array(NUMBER_LEVELS).fill(0)}
            />
        </div>
    )
}