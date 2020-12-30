import React from 'react';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/ButtonBase';

export class MenuLevels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {passedLevels: [0, 1, 2]};
    }

    changePassedLevels = (newPassedLevels) => {
        this.setState({passedLevels: newPassedLevels});
    }

    setPassedLevels = (level) => {
        if (!this.state.passedLevels.includes(level)) {
            this.state.passedLevels.push(level - 1);
            this.changePassedLevels(this.state.passedLevels);
        }
    }

    chooseLevel = (e) => {
        // open chose level
    }

    openPreviousScreen = () => {
        // open previous screen
    }

    render() {
        const {title, variant, itemList, name, color} = this.props;
        const createListItem = (item, index) => (
            <div className='item-level' key={name + (index + 1)}>
                {(this.state.passedLevels.includes(index)) ? <div className='check-level passed-level'></div> :
                    <div className='check-level'></div>}
                <button className='btn-level' onClick={this.chooseLevel} id={index}>
                    <p>{name + ' ' + (index + 1)}</p>
                </button>
            </div>

        );


        return (
            <div>
                <Typography variant={variant} color={color}>{title}</Typography>
                <div className='list-levels'>
                    {itemList.map((item, index) => createListItem(item, index))}
                </div>
                <div className='btns-level-menu'>
                    <button className='btn-level footer-levels' key='left' onClick={() => this.changePassedLevels([])}>
                        <p>Clear Checkmarks</p>
                    </button>
                    <button className='btn-level footer-levels' key='right' onClick={this.openPreviousScreen}>
                        <p>Previous Screen</p>
                    </button>
                </div>
            </div>
        );
    }
}