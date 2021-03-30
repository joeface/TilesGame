import React from 'react';

class Tile extends React.Component {
    
    render(){
        const tileClassName = 'tile' + (this.props.isSelected ? ' selected' : '');

        return (
            <div 
                className={tileClassName}
                onClick={(i) => this.props.onClick(i)}
            >
                {this.props.title}
            </div>
        )
    }
}

export class Board extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            selected: null
        };

    }

    selectTile(key){
        console.log('Select', key)
        this.setState({selected: key});
    }

    render(){

        const tiles = this.props.tiles ? this.props.tiles.map((title, step) => {

            return (
                <Tile 
                    key={'stage-'+this.props.stage +'-item-' + step}
                    title={title}
                    isSelected={this.props.selected === step}
                    onClick={() => this.props.onClick(step)}
                /> 
            )
        }) : 'No Tiles for Stage';

        return (
            <div className="board generic">
                { tiles }
            </div>
        );
    }

}


export class SummaryBoard extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            selected: props.selected
        };

    }

    render(){
        
        const tiles = this.state.selected ? Object.keys(this.state.selected).map((stage, key) => {
            const item  = this.state.selected[stage];
            return (
                <Tile 
                    key={'stage-'+this.props.stage +'-item-' + key}
                    title={this.props.stages[stage].tiles[item]}
                    onClick={()=>{}}
                /> 
            )
        }) : 'No Items Selected';

        return (
            <div className="board board-summary">
                { tiles }
            </div>
        );
    }

}


export class IntroBoard extends React.Component {

    render(){

        return (
            <div className="board board-intro">
                Привет! Это игра
            </div>
        );
    }

}


export class ResultsBoard extends React.Component {

    render(){

        return (
            <div className="board board-results">
                Ты выиграл или проиграл
            </div>
        );
    }

}
