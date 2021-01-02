import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
    listLevels: {
        display: 'flex',
        'flex-flow': 'column wrap',
        height: '100vh',
    },

    itemLevel: {
        margin: '3rem',
        display: 'flex',
        'justify-items': 'center',
        'align-items': 'center',
    },

    btnLevel: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        'border-radius': '1rem',
        width: '12rem',
        outline: 'none',
        color: 'white',
        'font-size': '2rem',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },

    btnsLevelMenu: {
        display: 'flex',
        'justify-content': 'space-around',
    },

    footerLevels: {
        background: 'linear-gradient(45deg, #375fa1 30%, #689cf2 90%)',
        boxShadow: '0 3px 5px 2px rgba(91, 212, 252, .3)',
        width: '16rem',
        margin: '3rem',
        'font-size': '1.5rem',
        'border-radius': '1rem',
        outline: 'none',
        color: 'white',
    },

    checkLevel: {
        width: '3rem',
        height: '3rem',
        'margin-right': '1rem',
    },

    passedLevel: {
        width: '3rem',
        height: '3rem',
        'margin-right': '1rem',
        background: 'url("../../assets/icons/checkIcon.png") 100% 100% no-repeat',
        'background-size': 'cover',
    }
});

export function MenuLevels(props) {
    const [passedLevels, setPassedLevels] = useState([1, 2, 3]);

    const addPassedLevel = (level) => {
        if (!passedLevels.includes(level)) {
            const newPassedLevels = passedLevels.concat();
            newPassedLevels.push(level);
            setPassedLevels(newPassedLevels);
        }
    }

    const chooseLevel = (e) => {
        // open chose level
    }

    const openPreviousScreen = () => {
        // open previous screen
    }

    const classes = useStyles();
    const {title, variant, itemList, name, color} = props;
    const createListItem = (item, index) => (
        <div className={classes.itemLevel} key={name + index}>
            {(passedLevels.includes(index)) ? <div className={classes.passedLevel}></div> :
                <div className={classes.checkLevel}></div>}
            <Button className={classes.btnLevel} onClick={chooseLevel} id={index}>
                <p>{name + ' ' + index}</p>
            </Button>
        </div>
    );

    useEffect(() => {
        itemList.map((item, index) => createListItem(item, index + 1))
    });


    function ItemLevel(index) {
        return (
            <div className={classes.itemLevel} key={name + index}>
                {(passedLevels.includes(index)) ? <div className={classes.passedLevel}></div> :
                    <div className={classes.checkLevel}></div>}
                <Button className={classes.btnLevel} onClick={chooseLevel} id={index}>
                    <p>{name + ' ' + index}</p>
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Typography variant={variant} color={color}>{title}</Typography>
            <div className={classes.listLevels}>
                {itemList.map((item, index) => ItemLevel(index + 1))}
            </div>
            <div className={classes.btnsLevelMenu}>
                <Button className={classes.footerLevels} key='left' onClick={() => setPassedLevels([])}>
                    <p>Clear Checkmarks</p>
                </Button>
                <Button className={classes.footerLevels} key='right' onClick={() => openPreviousScreen}>
                    <p>Previous Screen</p>
                </Button>
            </div>
        </div>
    );
}